<template>
  <div id="news" class="news-wraper section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <h1 class="news-title">
          {{ title }}
        </h1>
        <div class="news-content">
          <div class="left carousel-wrap ">
            <el-carousel height="500px">
              <el-carousel-item v-for="(item, index) in carouselLists" :key="index">
                <img class="news-img" :src="item.imgUrl" alt="">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="right text-wrap">
            <ul>
              <li
                v-for="(news, newsIndex) in newLists"
                :key="newsIndex"
                class="text-item"
              >
                <span class="dot" />
                <div class="text-content">
                  <span class="text">
                    {{ news.content }}
                  </span>
                  <span class="time"> {{ news.time }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { newsConfig } from '../../../../../config/home.js'

export default {
  data() {
    return {
      title: window.homeConfig.newsConfig.title,
      carouselLists: window.homeConfig.newsConfig.carouselLists,
      newLists: window.homeConfig.newsConfig.newLists
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  },

  created() {
   console.log('window22222222222222222222222222222222', window.config);  
  },
}
</script>

<style lang="scss" scoped>
.news-wraper {
  // box-shadow: 0 2px 12px 0 #dddddd;
  box-shadow: 0 4px 12px 0 #f3f3f3;
  // padding: 50px 64px;
  .news-title {
    text-align: left;
    font-size: 32px;
  }
  .news-content {
    display: flex;
    .left {
      width: 800px;
      height: 500px;

      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }

      .news-img {
        object-fit: cover;
        height: 100%;
      }
      :deep(.el-carousel__button) {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }

    .right {
      flex: 1;
      .text-item {
        color: #697a89;
        font-size: 16px;
        font-family: Poppins, sans-serif;
        display: flex;
        align-items: center;
        line-height: 50px;
        .dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #697a89;
          margin-right: 8px;
        }
        .text-content {
          display: flex;
          flex: 1;
          justify-content: space-between;
          align-items: center;
          .text {
            display: inline-block;
          }
          .time {
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>
