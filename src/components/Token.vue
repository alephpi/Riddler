<script setup lang="ts">
import { ref } from 'vue'
import { homoph, march, pronounce } from '../composables/nlp'
import { temper } from '../composables/state'

const { word, tag } = defineModels<{
  word: string
  tag?: string
}>()
// const isComputed = ref(false)
const py_normal = ref(pronounce(word.value, { style: 'normal' }).join(' '))
const py_abbr = ref(pronounce(word.value, { style: 'first_letter' }).join(''))
const mars = ref(march(word.value, temper.value))
const homo = ref(homoph(word.value, py_normal.value.split(' '), temper.value))
const items = ref([word.value, py_normal.value, py_abbr.value, mars.value, homo.value])
// function r() {
//   if (!isComputed.value) {
//     items.value = [word.value, py_normal, py_abbr]
//     isComputed.value = true
//   }
// }

const showText = ref(word)
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
  <span v-if="!tag" class="el-dropdown" :disabled="true">
    {{ showText }}
  </span>
  <span v-else>
    <el-dropdown :class="tag" trigger="hover">
      {{ showText }}
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="(item, index) in items"
            :key="index"
            @click="showText = item"
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
