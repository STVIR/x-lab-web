<template>
  <div id="community" class="community-wraper section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <h1 class="community-title">
          {{ title }}
        </h1>
        <div class="community-content">
          <div
            v-for="(item, index) in communityLists"
            :key="index"
            class="content-item"
          >
            <div class="item-content">
              <h3 class="title">{{ item.title }}</h3>
              <div class="desc">
                {{ item.desc }}
              </div>
              <div class="link">
                <!-- <a :href="item.link" target="_blank">查看详情</a> -->
                <el-link :href="item.link" target="_blank" :underline="false">{{
                  item.linkText
                }}</el-link>
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
      title:  window.homeConfig.communityConfig.title,
      communityLists:  window.homeConfig.communityConfig.communityLists
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.community-wraper {
  // box-shadow: 0 2px 12px 0 #dddddd;
  box-shadow: 0 4px 12px 0 #f3f3f3;
  // padding: 50px 64px;
  .community-title {
    text-align: left;
    font-size: 32px;
  }

  .community-content {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    .content-item {
      width: 330px;
      height: 220px;
      background: #cccccc;
      padding: 16px;
      color: #fff;
      margin-top: 10px;
      margin-right: 16px;
      &:hover {
        background-color: #34495e;
      }
      .title {
        text-align: left;
        font-size: 20px;
        line-height: 36px;
      }
      .desc {
        text-align: left;
        font-size: 14px;
        line-height: 20px;
      }
      .link {
        margin-top: 20px;
        width: 85px;
        height: 30px;
        border: 1px solid #fff;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        border-radius: 4px;
        :deep(.el-link--inner) {
          color: #fff;
        }

        &:hover {
          background-color: #ffffff;
          :deep(.el-link--inner) {
            color: #969696;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 1380px) {
  .content-item {
    width: 28% !important;
    min-width: 200px;
  }
}
</style>
