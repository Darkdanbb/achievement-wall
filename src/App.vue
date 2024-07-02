<template>
  <router-view/>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<script setup lang="ts">
import {useDark, useToggle} from '@vueuse/core'

useToggle(useDark()) // 设置默认主题 黑暗模式
</script>