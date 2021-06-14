<template>
  <div class="home">
    HOME PAGE
    <el-button type="primary">{{ $t('common.add') }}</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
})
</script>
