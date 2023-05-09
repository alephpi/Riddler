<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const textareaRef = ref(null)
const rows = ref(1)
const { modelValue } = defineModels<{
  modelValue: string
}>()

onMounted(() => {
  nextTick(adjustTextareaSize)
})

watch(() => modelValue.value, () => {
  nextTick(adjustTextareaSize)
})

// 参考vant组件库中的field组件
function adjustTextareaSize() {
  const textarea = textareaRef.value

  textarea.style.height = 'auto'
  const height = textarea.scrollHeight

  if (height) { // 改变textarea高度达到自适应
    textarea.style.height = `${height}px`
  }
}
</script>

<template>
  <textarea
    ref="textareaRef"
    v-model="modelValue"
    :rows="rows"
    style="overflow:hidden"
    p="x-4 y-2"
    w="50%"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  />
</template>
