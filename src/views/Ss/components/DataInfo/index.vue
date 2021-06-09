<template>
  <div id="ssDataInfo" class="ssDataInfo section-wraper">
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
        <div class="ssDataInfo-content">
          <div class="content-item content-dataDetail ">
            <h4 class="replay-title content-title">
              {{ replay.title }}
            </h4>
            <p class="content-text">{{ replay.content }}</p>
          </div>
          <div class="content-item content-model">
            <h4 class="model-title content-title">
              {{ model.title }}
            </h4>
            <p class="content-text">{{ model.content }}</p>
          </div>
          <div class="content-item content-model">
            <h4 class="model-title content-title">
              {{ video.title }}
            </h4>
            <video class="video-content" controls width="500" :poster="video.vedeoImg" height="300">
              <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm">
              <source :src="video.videoLink" type="video/mp4">
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: window.ssConfig.dataInfoConfig.title,
      replay: window.ssConfig.dataInfoConfig.replay,
      model: window.ssConfig.dataInfoConfig.model,
      video: window.ssConfig.dataInfoConfig.video
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
.ssDataInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }
  .content-item {
    text-align: left;
    text-indent: 20px;
    line-height: 30px;
    .content-text {
      text-indent: 20px;
    }
    .dataDownload-content {
      display: flex;
      flex-wrap: wrap;
      .download-item {
        width: 100%;
        text-decoration: underline;
        color: #02a7f0;
      }
    }
    .img {
      width: 100%;
    }
  }
  .content-video {
    display: inline-block;
    width: 340px;
    height: 186px;
  }

  .video-content{
        width: 100%;
    height: 560px;
  }
}
</style>
