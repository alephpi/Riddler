import { POSTAG, Segment, useDefault } from 'segmentit'
import pinyin from 'pinyin'
import { timestamp } from '@vueuse/core'

const segmentit = useDefault(new Segment())
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
  // POSTAG.D_D, // 副词 副语素
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

function tagging(pos?: number) {
  if (NOUNS.has(pos))
    return 'noun'

  else if (VERBS.has(pos))
    return 'verb'

  else if (OTHERS.has(pos))
    return 'other'

  else
    return null
}

export function tokenize(text: string): object[] {
  // return segmentit.doSegment(text).map(item => item.w)
  const t = timestamp()
  const tokens = segmentit.doSegment(text)
  tokens.forEach((token, id) => {
    token.p = tagging(token.p)
    token.id = t + id
  })
  return tokens
}

export function pronounce(word: string): string[][] {
  return pinyin(word)
}
