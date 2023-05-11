import { POSTAG, Segment, useDefault } from 'segmentit'
import { pinyin as pronounce } from 'pinyin'
import { timestamp } from '@vueuse/core'
import axios from 'axios'
import MARSRaw from '../data/mars.min.json'
import HOMORaw from '../data/homophones.json'

export interface Token {
  word: string
  tag?: 'noun' | 'verb' | 'other'
  id: number
  items: string[]
}

const MARS: Record<string, string> = MARSRaw
const HOMO: Record<string, string> = HOMORaw

const segmentit = useDefault(new Segment())
export { pronounce }
export const NOUNS = new Set([
  POSTAG.D_I, // 成语
  POSTAG.D_L, // 习语
  POSTAG.D_N, // 名词 名语素
  POSTAG.A_NR, // 人名
  POSTAG.A_NS, // 地名
  POSTAG.A_NT, // 机构团体
  POSTAG.A_NX, // 外文字符
  POSTAG.A_NZ, // 其他专名
])
export const VERBS = new Set([
  POSTAG.D_V, // 动词 动语素
])

export const OTHERS = new Set([
  POSTAG.D_A, // 形容词 形语素
  POSTAG.D_B, // 区别词 区别语素
  POSTAG.D_X, // 非语素字
  POSTAG.D_Z, // 状态词
  // POSTAG.D_C, // 连词 连语素
  POSTAG.D_D, // 副词 副语素
  // POSTAG.D_E, // 叹词 叹语素
  // POSTAG.D_F, // 方位词 方位语素
  // POSTAG.A_M, // 数词 数语素
  // POSTAG.D_MQ, // 数量词
  // POSTAG.D_O, // 拟声词
  // POSTAG.D_P, // 介词
  // POSTAG.A_Q, // 量词 量语素
  // POSTAG.D_R, // 代词 代语素
  // POSTAG.D_S, // 处所词
  // POSTAG.D_T, // 时间词
  // POSTAG.D_U, // 助词 助语素
  // POSTAG.D_W, // 标点符号
  // POSTAG.D_Y, // 语气词 语气语素
  // POSTAG.D_ZH, // 前接成分
  // POSTAG.D_K, // 后接成分
  // POSTAG.UNK, // 未知词性
  // POSTAG.URL, // 网址、邮箱地址kkkk

])

function tagging(pos?: any) {
  if (NOUNS.has(pos))
    return 'noun'

  else if (VERBS.has(pos))
    return 'verb'

  // else if (OTHERS.has(pos))
  //   return 'other'

  else
    return undefined
}

export function tokenize(text: string): Token[] {
  // return segmentit.doSegment(text).map(item => item.w)
  const t = timestamp()
  const raw_tokens = segmentit.doSegment(text)
  const tokens: Token[] = []
  for (const [i, raw_token] of raw_tokens.entries()) {
    tokens[i] = {
      word: raw_token.w,
      tag: raw_token.p,
      id: t + i,
      items: [],
    }
  }
  tokens.forEach((token, id) => {
    token.tag = tagging(token.tag)
    token.id = t + id
  })
  return tokens
}

export function march(word: string, temper = 0.1): string {
  let mars = ''
  for (const char of word) {
    if ((Math.random() > temper) || !(char in MARS)) {
      mars += char
      continue
    }
    let candi = MARS[char]
    if (candi.length === 2)
      candi = candi[Math.floor(Math.random() * 2)]
    mars += candi
  }
  return mars
}

export function homoph(word: string, pinyin: string[], temper = 0.1): string {
  let homo = ''
  for (let i = 0; i < word.length; i++) {
    if (Math.random() > temper || !(pinyin[i] in HOMO)) {
      homo += word[i]
      continue
    }
    let candi = HOMO[pinyin[i]]
    if (candi.length > 1)
      candi = candi[Math.floor(Math.random() * candi.length)]
    homo += candi
  }
  return homo
}
export async function translate(word: string, s = 'cn', t = 'en'): Promise<string> {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${t}&dt=t&q=${encodeURI(word)}`
  try {
    const response = await axios.get(url)
    const translatedText = response.data[0][0][0]
    return translatedText
  }
  catch (error) {
    console.error(error)
    return ''
  }
}
