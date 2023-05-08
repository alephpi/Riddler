<script setup lang="ts">
import { ref } from 'vue'
import { NOUNS, OTHERS, VERBS, tokenize } from '../composables/nlp'

const inputText = ref('')
const tokens = ref()
const isProcessed = ref(false)
const nounTokens = ref<object[]>([])
const verbTokens = ref<object[]>([])
const otherTokens = ref<object[]>([])
function processText() {
  tokens.value = tokenize(inputText.value)

  nounTokens.value = []
  verbTokens.value = []
  otherTokens.value = []
  tokenize(inputText.value).forEach((token) => {
    if (NOUNS.has(token.p))
      nounTokens.value.push(token)

    else if (VERBS.has(token.p))
      verbTokens.value.push(token)

    else if (OTHERS.has(token.p))
      otherTokens.value.push(token)
  })

  isProcessed.value = true
  console.log(tokens.value)
  console.log(tokens.value.map(item => pronounce(item.w)).join(' '))
}

const index = ref(0)
const randomTexts = [
  '这种事情见得多了，我只想说懂得都懂，不懂的我也不多解释，毕竟自己知道就好，细细品吧。',
  '一个幽灵，共产主义的幽灵，在欧洲游荡。为了对这个幽灵进行神圣的围剿，旧欧洲的一切势力，教皇和沙皇、梅特涅和基佐、法国的激进派和德国的警察，都联合起来了。',
  '马克思以前的唯物论，离开人的社会性，离开人的历史发展，去观察认识问题，因此不能了解认识对社会实践的依赖关系，即认识对生产和阶级斗争的依赖关系。',
]

function randomText() {
  index.value = (index.value + 1) % randomTexts.length
  inputText.value = randomTexts[index.value]
}
</script>

<template>
  <div class="input-container">
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
  </div>

  <!-- <p>{{ tokens }}</p> -->
  <div v-if="isProcessed">
    <span v-for="(token, index) in tokens" :key="index">
      <Token :word="token.w" :pos="token.p" />
    </span>
    <!-- <div>
    <table
      v-if="isProcessed"
      class="centered-table"
    >
      <tbody>
        <tr>
          <td width="33%">
            <div v-for="(token, index) in nounTokens" :key="index">
              <Token :word="token.w" :pos="token.p" />
            </div>
          </td>
          <td width="33%">
            <div v-for="(token, index) in verbTokens" :key="index">
              <Token :word="token.w" :pos="token.p" />
            </div>
          </td>
          <td width="33%">
            <div v-for="(token, index) in otherTokens" :key="index">
              <Token :word="token.w" :pos="token.p" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div> -->
  </div>
</template>

<style>
.centered-table {
  text-align: center;
  margin: auto;
}
</style>
