<template>
  <div id="ssExample" class="ssExample section-wraper">
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
        <!--      <div class="ssExample-content">
          <p>{{ content }}</p>
        </div> -->

        <p class="desc">
          DI-drive provides powerful <strong>visualization</strong> that can
          show all kinds of sensor data and text of running status. The
          visualizer can be customized easily in configuration files, and can
          save <strong>gif/video</strong>
          files.
        </p>

        <img class="img" :src="imgUrl" alt="" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: window.ssConfig.exampleConfig.title,
      imgUrl: window.ssConfig.exampleConfig.imgUrl,
      content: window.ssConfig.documentInfoConfig.content
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>

<style lang="scss" scoped>
.ssExample {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }
  .ssExample-content {
    color: #0000ff;
    text-align: left;
    text-indent: 20px;
    padding: 2px 0;
  }

  .img {
    width: 1145px;
    height: 643px;
  }
}
</style>
