<template>
  <div class="footer-wraper">
    <div class="footer-left footer-info">
      <div
        v-for="(info, infoIndex) in footerInfoLists"
        :key="infoIndex"
        class="footer-source footer-info-item"
      >
        <h1 class=" footer-info-title">{{ info.title }}</h1>
        <div
          v-for="(item, index) in info.items"
          :key="index"
          class="item-title"
        >
          <div class="link">
            <!-- <a :href="item.link" target="_blank">查看详情</a> -->
            <el-link :href="item.link" target="_blank" :underline="false">{{
              item.itemTitle
            }}</el-link>
          </div>
        </div>
      </div>
      <!-- <div class="footer-link">
        <h3>友情链接</h3>
        <div class="source-item">文档</div>
        <div class="source-item">教程</div>
        <div class="source-item">示例项目</div>
      </div>
      <div class="footer-contact"></div> -->
    </div>
    <div class="footer-right footer-qrcode">
      <img
        v-for="(qrcode, qrcodeIndex) in qrcodeLists"
        :key="qrcodeIndex"
        :src="qrcode.imgUrl"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import { footerConfig } from '../../../../../config/home.js'

export default {
  data() {
    return {
      footerInfoLists: footerConfig.footerInfoLists,
      qrcodeLists: footerConfig.qrcodeLists

    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.footer-wraper {
  width: 100%;
  height: 332px;
  background-color: #0079fe;
  display: flex;
  // padding: 20px ;
  padding: 50px 64px;
  box-sizing: border-box;
  .footer-left {
    display: flex;
    color: #fff;
    .footer-info-title {
      text-align: left;
    }
    .footer-info-item {
      padding: 0px 56px;
      width: 138px;
      &:first-child {
        padding-left: 0px;
      }
      .item-title {
        text-align: left;
        .link {
           :deep( .el-link--inner) {
            line-height: 40px;
            font-weight: 650;
            color: #fff;
          }
        }
      }
    }
  }
  .footer-right {
    display: flex;
    align-items: center;
    width: 249px;
    justify-content: space-between;
    margin-left: 64px;
  }
}
</style>
