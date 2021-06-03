<template>
  <div class="sceneCase-wraper">
    <h1 class="sceneCase-title">
      {{ title }}
    </h1>
    <div class="sceneCase-content">
      <div v-for="(item, index) in caseLists" :key="index" class="content-item">
        <div class="item-content">
          <el-image :src="item.imgUrl" fit="fill" />
          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sceneCaseConfig } from '../../../../../config/home.js'

export default {
  data() {
    return {
      title: sceneCaseConfig.title,
      caseLists: sceneCaseConfig.caseLists
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.sceneCase-wraper {
  box-shadow: 0 4px 12px 0 #f3f3f3;
  padding: 50px 64px;
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
        .el-image {
          width: 520px;
          height: 286px;
        }
        .desc {
          background-color: #f9f9f9;
          height: 50px;
          width: 100%;
          display: flex;
          align-items: center;
          padding-left: 10px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
