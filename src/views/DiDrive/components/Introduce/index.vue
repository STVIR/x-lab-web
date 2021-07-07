<template>
  <div id="ssIntroduce" class="ssIntroduce section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <div class="ssIntroduce-container">
          <p class="content">
            <span class="title"> {{ title }} </span>{{ content }}
          </p>

          <div class="img">
            <img class="icon" :src="imgUrl" alt="" />
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
      title: window.ssConfig.introduceConfig.title,
      content: window.ssConfig.introduceConfig.content,
      imgUrl: window.ssConfig.introduceConfig.imgUrl
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
.ssIntroduce {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;

  .ssIntroduce-container {
    display: flex;
    .content {
      font-size: 28px;
      line-height: 37px;
      margin-right: 10px;
      color: #4c4c4c;

      .title {
        font-weight: 650;
      }
    }
    .icon {
      width: 410px;
    }
  }
}
</style>
