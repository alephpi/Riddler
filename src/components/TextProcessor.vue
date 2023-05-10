<script setup lang="ts">
import { ref } from 'vue'
import { type Token, tokenize } from '../composables/nlp'

const inputText = ref('')
const tokens = ref<Token[]>([])
// const isProcessed = ref(false)
// const nounTokens = ref<object[]>([])
// const verbTokens = ref<object[]>([])
// const otherTokens = ref<object[]>([])
const id2token = ref<Record<number, string>>({})
const tokenSet = ref<Record<string, object>>({})
function processText() {
  // console.log(inputText.value)
  id2token.value = {}
  tokenSet.value = {}
  tokens.value = tokenize(inputText.value)
  for (const token of tokens.value) {
    const word = token.word
    // console.log(word)
    const id = token.id
    const tag = token.tag
    const items: string[] = [word]
    id2token.value[id] = word
    if (!(word in tokenSet.value)) {
      if (tag) {
        const py_normal = pronounce(word, { style: 'normal' }).join(' ')
        const py_abbr = pronounce(word, { style: 'first_letter' }).join('')
        const mars = march(word, temper.value)
        const homo = homoph(word, py_normal.split(' '), temper.value)
        items.push(py_normal, py_abbr, mars, homo)
      }
      tokenSet.value[word] = {
        tag,
        items,
      }
    }
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
      @click="processText"
    >
      加密
    </button>
    <!-- <Share :text="text" /> -->
  </div>

  <!-- <p>{{ tokens }}</p> -->
  <div
    w="50%"
    class="m-auto"
  >
    <Token v-for="(word, id) in id2token" :key="id" :token="tokenSet[word]" />
  </div>
</template>
