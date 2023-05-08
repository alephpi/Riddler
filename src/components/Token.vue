<script setup lang="ts">
import { computed, ref } from 'vue'
import pinyin from 'pinyin'
import { NOUNS, OTHERS, VERBS } from '../composables/nlp'

const props = defineProps<{
  word: string
  pos?: number
}>()

const disabled = ref(false)
const text = ref(props.word)
const tag = computed(() => {
  if (NOUNS.has(props.pos)) {
    return 'noun'
  }
  else if (VERBS.has(props.pos)) {
    return 'verb'
  }
  else if (OTHERS.has(props.pos)) {
    return 'other'
  }
  else {
    disabled.value = true
    return 'disabled'
  }
})

const py_normal = computed(() => pinyin(props.word, { style: 'normal' }).join(' '))
const py_abbr = computed(() => pinyin(props.word, { style: 'first_letter' }).join(''))

// const show = computed(() => {
//   switch (attributes[curid.value]) {
//     case 'word':
//       return props.word
//     case 'py_full':
//       return py_normal.value
//     case 'py_abbr':
//       return py_abbr.value
//     default:
//       return ''
//   }
// })
</script>

<template>
  <DropDown
    :disabled="disabled"
    :class="tag"
    :items="[text, py_normal, py_abbr]"
  />
</template>

<style>
.verb{
  color: rgb(222, 117, 37);
}
.noun{
  color: rgb(43, 164, 109);
}
.other{
  color: rgb(117, 136, 153);
}
/* .verb {
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(222, 117, 37, var(--un-bg-opacity));
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
.noun {
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(43, 164, 109, var(--un-bg-opacity));
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
}
.other {
  display: inline-block;
  cursor: pointer;
  border-radius: 0.25rem;
  --un-bg-opacity: 1;
  background-color: rgba(117, 136, 153, var(--un-bg-opacity));
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  --un-text-opacity: 1;
  color: rgba(255, 255, 255, var(--un-text-opacity));
} */
</style>
