<script setup lang="ts">
const { text } = defineModels<{
  text: string
}>()
const clipboard = useClipboard()

const copied = ref(false)
async function copy() {
  if (clipboard.isSupported) {
    await clipboard.copy(text.value)
    copied.value = true
  }
}
</script>

<template>
  <button icon-btn @click="copy">
    <div :class="{ 'i-carbon-checkbox-checked': copied, 'i-carbon-copy': !copied }" />
  </button>
</template>
