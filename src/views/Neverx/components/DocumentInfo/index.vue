<template>
  <div id="documentInfo" class="documentInfo">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 20 }"
        :xl="{ span: 20 }"
      >
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { documentInfoConfig, algorithmInfoConfig } from '../../../../../config/neverx.js'

export default {
  data() {
    return {
      documentInfoConfig: window.neverxConfig.documentInfoConfig,
      algorithmInfoConfig: window.neverxConfig.algorithmInfoConfig

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
