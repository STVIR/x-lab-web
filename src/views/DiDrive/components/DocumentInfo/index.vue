<template>
  <div id="ssDocumentInfo" class="ssDocumentInfo section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <h3 class="title">
          {{ title }}
        </h3>
        <div class="ssDocumentInfo-content">
          <p>{{ content }}</p>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>

export default {
  data() {
    return {
      title: window.ssConfig.documentInfoConfig.title,
      content: window.ssConfig.documentInfoConfig.content
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
.ssDocumentInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }
  .ssDocumentInfo-content {
    color: #0000ff;
    text-align: left;
    text-indent: 20px;
       padding: 2px 0;
  }
}
</style>
