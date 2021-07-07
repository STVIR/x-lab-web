<template>
  <div id="diStarExample" class="diStarExample">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 20 }"
        :xl="{ span: 20 }"
      >
        <h3 class="title">
          {{ title }}
        </h3>
        <!-- <div class="diStarExample-content">
          <p>{{ content }}</p>
        </div> -->
        <p class="desc">{{ desc }}</p>
        <div class="content">
          <div class="listItem" v-for="(item, index) in lists" :key="index">
            <p class="itemTitle">{{ item.title }}</p>
            <!-- <img :src="item.imgUrl" alt="" class="img" /> -->
            <video class="starVideo-content" controls width="500" height="300">
              <!-- :poster="video.vedeoImg" -->
              <span>{{ item }}</span>
              <!-- <source
                    src="//vjs.zencdn.net/v/oceans.webm"
                    type="video/webm" -->
              <!-- /> -->
              <source :src="item.videoLink" type="video/mp4" />
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
      title: window.xadConfig.exampleConfig.title,
      desc: window.xadConfig.exampleConfig.desc,
      lists: window.xadConfig.exampleConfig.lists
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
.diStarExample {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }
  .diStarExample-content {
    color: #0000ff;
    text-align: left;
    text-indent: 20px;
    padding: 2px 0;
  }

  .desc {
    text-align: left;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .listItem {
      .img {
        width: 320px;
        // height: 270px;
      }
    }
  }
}
</style>

<style lang="scss">
.starVideo-content {
  width: 320px;
  height: 270px;
  object-fit: fill;
}
</style>
