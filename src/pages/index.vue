<script setup lang="ts" generic="T extends any, O extends any">
import { temper } from '../composables/state'
import { MAGMA } from '../composables/colorbar'

defineOptions({
  name: 'IndexPage',
})

const colorTemper = computed(() => MAGMA[temper.value])
</script>

<template>
  <div>
    <el-popover
      trigger="hover"
      width="50%"
      placement="bottom"
    >
      <template #reference>
        <div
          i-iconoir:emoji-puzzled
          :style="{ color: colorTemper }"
          inline-block
          text-4xl
        />
      </template>
      <!-- <div class="slider">
        <el-slider
          v-model="temper"
          :format-tooltip="format"
        />
      </div> -->
      <Menu />
    </el-popover>
    <p>
      谜语人
    </p>
    <p>
      <em text-sm op75>
        自然语言数据增强</em>
    </p>

    <div py-4 />
    <TextProcessor />
  </div>
</template>
