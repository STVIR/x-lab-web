<template>
  <div id="documentInfo" class="documentInfo">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="documentInfo-content">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
import { documentInfoConfig } from '../../../../../config/xad.js'

export default {
  data() {
    return {
      title: documentInfoConfig.title,
      content: documentInfoConfig.content
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.documentInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }
  .documentInfo-content {
    color: #0000ff;
    text-align: left;
    text-indent: 20px;
       padding: 2px 0;
  }
}
</style>
