<script lang="ts" setup>
const props = defineProps<{
  items: string[]
}>()
const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ modelValue }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, index) in props.items"
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
</template>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
