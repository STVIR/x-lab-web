<template>
  <div class="sceneCase-wraper section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 20 }"
        :xl="{ span: 20 }"
      >

        <h1 class="sceneCase-title">
          {{ title }}
        </h1>
        <div class="sceneCase-content">
          <div
            v-for="(item, index) in caseLists"
            :key="index"
            class="content-item"
          >
            <div class="item-content">
              <!-- <el-image src="@/assets/images/home/news/news_image_01.png" fit="fill" /> -->

              <img class="item-img" :src="item.imgUrl" alt="">

              <div class="desc">
                {{ item.desc }}
                <!-- {{ item.imgUrl }} -->
              </div>
            </div>
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
      title: window.homeConfig.sceneCaseConfig.title,
      caseLists: window.homeConfig.sceneCaseConfig.caseLists
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.sceneCase-wraper {
  box-shadow: 0 4px 12px 0 #f3f3f3;
  .sceneCase-title {
    text-align: left;
    font-size: 32px;
  }

  .sceneCase-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .content-item {
      text-align: left;
      .item-title {
        font-size: 24px;
      }

      .item-content {
        display: flex;
        flex-direction: column;
        .item-img {
          width: 520px;
          height: 286px;
        }
        .desc {
          box-shadow: 0px 0px 10px 10px #f3f3f3;
          background-color: #ffffff;
          height: 80px;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: 0px;
          box-sizing: border-box;
          font-family: 'FreightSans';
          margin-top: 10px;
          max-width: 520px;
          font-size: 18px;
        }
      }
    }
  }

}
  // @media only screen and (max-width: 1380px) {
  //   .sceneCase-wraper {
  //     padding: 50px 0px;
  //   }
  // }
  // @media only screen and (max-width: 1320px) {
  //   .el-col-md-8 {
  //     width: 33%;
  //   }
  // }
  // @media only screen and (max-width: 1180px) {
  //   .el-col-sm-12 {
  //     width: 50%;
  //   }
  // }
  // @media only screen and (max-width: 940px) {
  //   .el-col-xs-24 {
  //     width: 100%;
  //   }
  // }
</style>
