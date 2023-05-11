<!-- eslint-disable quote-props -->
<script setup lang="ts">
import { options, temper } from '~/composables/state'

// const options = ['谐音梗', '火星文', '小学生', '海龟腔', 'yyds']
// const options = ['谐音梗']
// const checkedOptions = ref(options)
// const d = {
//   '谐音梗': isHomo,
//   '火星文': isMars,
//   '小学生': isChild,
//   '海龟腔': isEn,
//   'yyds': isYYDS,
// }
</script>

<template>
  <div py-4 class="slider">
    <span>温度</span>
    <el-slider
      v-model="temper"
    />
  </div>
  <div py-2 />
  <el-checkbox v-for="key in Object.keys(options)" :key="key" v-model="options[key]">
    {{ key }}
  </el-checkbox>
</template>

<style>
.el-slider{
    background: linear-gradient(to right, #000003, #000006, #01010B, #02020F, #040415, #060519, #09071F, #0C0926, #0E0A2A, #110C31, #140D35, #170F3C, #1A1041, #1E1049, #221150, #251155, #2A115C, #2D1060, #321067, #350F6A, #3B0F6F, #400F73, #430F75, #481078, #4B1079, #50127B, #53137C, #58157E, #5D177E, #60187F, #651A80, #681B80, #6C1D80, #711F81, #742081, #792281, #7C2381, #812581, #842681, #892881, #8D2980, #912A80, #952C80, #992D7F, #9E2E7E, #A12F7E, #A6317D, #AB337C, #AE347B, #B3357A, #B63679, #BB3877, #BE3976, #C33B74, #C83D72, #CB3E71, #D0416F, #D3426D, #D7456B, #DA4769, #DE4A67, #E24D65, #E55063, #E85461, #EB5660, #EE5B5E, #F0605D, #F2635C, #F4685B, #F56C5B, #F7715B, #F8755C, #F97B5D, #FA805E, #FB8460, #FB8A62, #FC8E63, #FC9366, #FD9768, #FD9D6B, #FDA26F, #FEA671, #FEAC75, #FEAF78, #FEB57C, #FEB97F, #FEBE83, #FEC488, #FEC78B, #FDCD90, #FDD193, #FDD698, #FDDA9C, #FDDFA1, #FCE5A6, #FCE8AA, #FCEEB0, #FCF1B3, #FBF7B9, #FBFCBF);
    height: var(--el-slider-height);
    --el-slider-main-bg-color:rgba(255,255,255,0);
    --el-slider-runway-bg-color: rgba(255,255,255,0);
    --el-slider-stop-bg-color: rgba(255,255,255,0);
}
.el-slider__button{
  background-color: rgba(75,85,99);
}
.slider {
  width: 70%;
  margin: auto;
  color: linear-gradient(to right, #000003, #000006, #01010B, #02020F, #040415, #060519, #09071F, #0B0824, #0E0A2A, #100C2F, #140D35, #170F3C, #1A1041, #1E1049, #20114D, #251155, #281159, #2D1060, #301065, #350F6A, #3B0F6F, #3E0F72, #430F75, #470F77, #4B1079, #4F117B, #53137C, #57147D, #5B167E, #5E177F, #63197F, #681B80, #6B1C80, #6F1E81, #731F81, #772181, #7A2281, #7F2481, #822581, #872781, #8C2980, #8F2A80, #942B80, #972C7F, #9C2E7F, #9F2F7E, #A4307D, #A7317D, #AC337B, #B0347B, #B53679, #B93778, #BD3977, #C23A75, #C53C74, #CA3E72, #CD3F70, #D1426E, #D4436D, #D9466A, #DD4968, #E04B66, #E44E64, #E65162, #EA5560, #EC585F, #EE5D5D, #F0605D, #F3655C, #F4685B, #F66E5B, #F7735C, #F8775C, #F97D5D, #FA805E, #FB8660, #FB8A62, #FC9064, #FC9366, #FD9969, #FD9F6C, #FDA26F, #FEA873, #FEAC75, #FEB179, #FEB57C, #FEBB80, #FEBE83, #FEC488, #FEC78B, #FDCD90, #FDD295, #FDD698, #FDDC9D, #FDDFA1, #FCE5A6, #FCE8AA, #FCEEB0, #FCF1B3, #FBF7B9, #FBFCBF); /* Change the color stops as needed */
}
</style>
