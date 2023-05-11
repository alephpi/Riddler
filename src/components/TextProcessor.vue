<script setup lang="ts">
import { ref } from 'vue'
import { type Token, tokenize, translate } from '../composables/nlp'
import { options } from '~/composables/state'

const inputText = ref('')
let tokens: Token[] = []
// const isProcessed = ref(false)
// const nounTokens = ref<object[]>([])
// const verbTokens = ref<object[]>([])
// const otherTokens = ref<object[]>([])

// avoid recompute a token variation
const id2token = ref<Record<number, string>>({}) // store tokens location
const tokenSet = ref<Record<string, { tag?: string; items: string[] }>>({}) // store unique tokens
const showTexts = ref<string[]>([]) // store token show text

function map(l: number, a: number): number {
  const x = Math.random()
  if (l <= 1)
    return 0
  if (x <= a)
    return x / a
  else
    return (l * (x - a) + 1 - x) / (1 - a)
}
let processed = false
let isProcessing = false
async function processText() {
  processed = false
  isProcessing = true
  // console.log(inputText.value)
  id2token.value = {}
  tokenSet.value = {}
  showTexts.value = []
  tokens = tokenize(inputText.value)
  for (const token of tokens) {
    const word = token.word
    // console.log(word)
    const id = token.id
    const tag = token.tag
    const items: string[] = [word]
    id2token.value[id] = word

    // lazy compute and store unique token
    if (!(word in tokenSet.value)) {
      // compute only for tags of interest (e.g. nouns and verbs)
      if (tag) {
        if (options.小学生)
          items.push(pronounce(word, { style: 'normal' }).join(' '))
        if (options.yyds)
          items.push(pronounce(word, { style: 'first_letter' }).join(''))
        if (options.火星文)
          items.push(march(word, temper.value / 100))
        if (options.谐音梗)
          items.push(homoph(word, pronounce(word, { style: 'normal' }).join(' ').split(' '), temper.value / 100))
        if (options.海龟腔)
          items.push(await translate(word))
      }
      tokenSet.value[word] = {
        tag,
        items,
      }
    }

    const showText = items[Math.floor(map(items.length, 1 - temper.value / 100))] || word
    showTexts.value.push(showText)
  }
  isProcessing = false
  processed = true
}
// onMounted()

function encodeText() {
  for (const [i, token] of tokens.entries()) {
    const items = tokenSet.value[token.word].items
    showTexts.value[i] = items[Math.floor(map(items.length, 1 - temper.value / 100))]
  }
}

const index = ref(0)
const examples = [
  '这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。',
  '一个幽灵，共产主义的幽灵，在欧洲游荡。为了对这个幽灵进行神圣的围剿，旧欧洲的一切势力，教皇和沙皇、梅特涅和基佐、法国的激进派和德国的警察，都联合起来了。',
  '马克思以前的唯物论，离开人的社会性，离开人的历史发展，去观察认识问题，因此不能了解认识对社会实践的依赖关系，即认识对生产和阶级斗争的依赖关系。',
]

function randomText() {
  index.value = (index.value + 1) % examples.length
  inputText.value = examples[index.value]
}
</script>

<template>
  <div>
    <TextArea
      v-model="inputText"
      placeholder="请输入谜底"
      autocomple="false"
    />
  </div>

  <div>
    <button
      class="m-3 text-sm btn"
      @click="randomText"
    >
      举例
    </button>
    <button
      class="m-3 text-sm btn"
      :disabled="!inputText"
      bg
      @click="processText"
    >
      加密
    </button>
    <button
      class="m-3 text-sm btn"
      :disabled="tokens.length === 0"
      @click="encodeText"
    >
      更新
    </button>

    <Share :text="showTexts.join('')" />
  </div>

  <!-- <p>{{ tokens }}</p> -->
  <div
    v-if="processed"
    w="50%"
    class="m-auto"
  >
    <Token v-for="(word, id, i) in id2token" :key="id" v-model="showTexts[i]" :token="tokenSet[word]" />
  </div>
</template>
