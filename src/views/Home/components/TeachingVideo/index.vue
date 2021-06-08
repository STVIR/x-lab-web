<template>
  <div id="teachingVideo" class="teachingVideo-wraper section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <h1 class="teachingVideo-title">
          {{ title }}
        </h1>
        <div class="teachingVideo-content">
          <div
            v-for="(item, index) in teachingVideoLists"
            :key="index"
            class="content-item"
          >
            <a class="item-content" :href="item.videoLink" target="_blank">
              <div class="videoImg">
                <i class="el-icon-video-play video-icon" />
              </div>
            </a>
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
      title:  window.homeConfig.teachingVideoConfig.title,
      teachingVideoLists:  window.homeConfig.teachingVideoConfig.teachingVideoLists
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.teachingVideo-wraper {
  // box-shadow: 0 2px 12px 0 #dddddd;
  box-shadow: 0 4px 12px 0 #f3f3f3;
  // padding: 50px 64px;
  .teachingVideo-title {
    text-align: left;
    font-size: 32px;
  }

  .teachingVideo-content {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .content-item {
      text-align: left;
      margin-top: 10px;
      margin-right: 16px;
      .item-title {
        font-size: 24px;
      }

      .item-content {
        display: inline-block;
        width: 340px;
        height: 186px;
        text-decoration: none;
        background-color: #ccc;
        &:hover {
          background-color: #34495e;
          cursor: pointer;
          .videoImg {
            .video-icon {
              &.el-icon-video-play {
                color: #1abc9c;
              }
            }
          }
        }
        .videoImg {
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 100%;
          height: 100%;
          .video-icon {
            font-size: 46px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
