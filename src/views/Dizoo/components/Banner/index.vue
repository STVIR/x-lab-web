<template>
  <div id="banner" class="banner">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 20 }"
        :xl="{ span: 20 }"
      >
        <!-- <h3 class="title">
          {{ documentInfoConfig.title }}
        </h3>
        <div class="documentInfo-content">
          <p>{{ documentInfoConfig.content }}</p>
        </div>

        <h3 class="title">
          {{ algorithmInfoConfig.title }}
        </h3> -->
        <div class="banner-content">
          <!-- <p>{{ algorithmInfoConfig.content }}</p> -->

          OpenDILab provides abundant implementations of reinforcement
          learning(RL) algorithms. It features well-tuned training
          configurations, efficient implementations and a pretrained algorithm
          zoo. We aim at helping researchers and engineers to quickly start
          learning RL, validate their ideas and easily get baselines for their
          custom environments.
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentInfoConfig: window.neverxConfig.documentInfoConfig,
      algorithmInfoConfig: window.neverxConfig.algorithmInfoConfig
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
.banner {
  box-shadow: 0 2px 12px 0 #dddddd;
  background-position: right bottom;
  background-repeat: repeat-x;
  background-attachment: scroll;
  width: 100%;
  background-image: url("../../../../../static/images/diZoo/banner.png");
  background-repeat: repeat-x;
  background-attachment: scroll;
  .title {
    text-align: left;
    font-size: 32px;
  }
  .banner-content {
    font-family: 'PingFangSC-Regular', 'PingFang SC', sans-serif;
    // font-weight: 400;
    text-align: left;
    font-style: normal;
    font-size: 28px;
    line-height: 38px;
    padding: 50px 64px;
    color: #fff;
  }
}
</style>
