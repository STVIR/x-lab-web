<template>
  <div id="documentInfo" class="documentInfo">
    <h3 class="title">
      {{ documentInfoConfig.title }}
    </h3>
    <div class="documentInfo-content">
      <p>{{ documentInfoConfig.content }}</p>
    </div>

    <h3 class="title">
      {{ algorithmInfoConfig.title }}
    </h3>
    <div class="documentInfo-content">
      <p>{{ algorithmInfoConfig.content }}</p>
    </div>
  </div>
</template>

<script>
import { documentInfoConfig, algorithmInfoConfig } from '../../../../../config/neverx.js'

export default {
  data() {
    return {
      documentInfoConfig: documentInfoConfig,
      algorithmInfoConfig: algorithmInfoConfig

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
   font-size: 32px;
  }
  .documentInfo-content {
    color: #0000ff;
    text-align: left;
    text-indent: 20px;
       padding: 2px 0;
  }
}
</style>
