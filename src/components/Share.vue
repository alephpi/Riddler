<script setup lang="ts">
import { isCopied } from '~/composables/state'

const { text } = defineModels<{
  text: string
}>()
const clipboard = useClipboard()

async function copy() {
  if (clipboard.isSupported) {
    await clipboard.copy(text.value)
    isCopied.value = true
  }
}
</script>

<template>
  <button p-2 text-6 icon-btn @click="copy">
    <div :class="{ 'i-carbon-checkbox-checked': isCopied, 'i-carbon-copy': !isCopied }" />
  </button>
</template>
