<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const name = $ref('')

const router = useRouter()
function go() {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <div>
    <div i-iconoir:emoji-puzzled inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/alephpi" target="_blank">
        谜语人
      </a>
    </p>
    <p>
      <em text-sm op75>
        自然语言数据增强</em>
    </p>

    <div py-4 />
    <TextProcessor />
  </div>
  <div py-4 />
  <div py-4>
    <DropDown :items="['aaa', 'bbb']">
      Hello
    </DropDown>
  </div>
</template>
