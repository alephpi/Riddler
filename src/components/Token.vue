<script setup lang="ts">
import type { Token } from '~/composables'

const { token } = defineProps<{
  token: Token
}>()

const { modelValue } = defineModels<{
  modelValue: string
}>()

// const isComputed = ref(false)
// function r() {
//   if (!isComputed.value) {
//     items.value = [word.value, py_normal, py_abbr]
//     isComputed.value = true
//   }
// }
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
  <span v-if="!token.tag" class="el-dropdown" :disabled="true">
    {{ token.items[0] }}
  </span>
  <span v-else>
    <el-dropdown :class="token.tag" trigger="hover">
      {{ modelValue }}
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, index) in token.items"
            :key="index"
            @click="modelValue = item"
          >
            {{ item }}
          </el-dropdown-item>
        <!-- <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>
          Action 4
        </el-dropdown-item>
        <el-dropdown-item divided>
          Action 5
        </el-dropdown-item> -->
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </span>
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
</style>
