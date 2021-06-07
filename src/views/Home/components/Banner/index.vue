<template>
  <div class="banner">
    <div class="left">
      <span class="banner-text">
        {{ bannerText }}
      </span>
      <span class="banner-text small">
        {{ bannerTextSmall }}
      </span>
    </div>
    <div class="right">
      <div class="btns" @click="goStart">
        GET STARTED
      </div>
    </div>
  </div>
</template>

<script>
// import { bannerConfig } from '../../../../../config/home.js'
export default {
  data() {
    return {
      bannerText: window.homeConfig.bannerConfig.bannerText,
      bannerTextSmall: window.homeConfig.bannerConfig.bannerTextSmall
    }
  },
  methods: {
    goStart() {
      this.$router.push({
        path: '/neverx'
      })
    }
  },

  created() {
     console.log(' window.config',  window.homeConfig);
    //  this.bannerText= window.homeConfig.bannerConfig.bannerText
  },
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: rgba(2, 167, 240, 1);
  background-position: right bottom;
  background-repeat: repeat-x;
  background-attachment: scroll;
  width: 100%;
  height: 328px;
  background-image: url('../../../../assets/images/bannerBg.png');
  background-position: right bottom;
  background-repeat: repeat-x;
  background-attachment: scroll;
  background-size: 4660px 462px;
  display: flex;
  justify-content: space-between;
  padding: 0px 80px;
  box-sizing: border-box;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    .banner-text {
      font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC',
        sans-serif;
      font-weight: 650;
      font-style: normal;
      font-size: 48px;
      color: #ffffff;
      &.small {
        font-size: 18px;
        margin-top: 86px;
        text-align: left;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 60px;

    .btns {
      display: inline-block;
      background-color: #f3f4f7;
      padding: 8px;
      border-radius:2px ;
      cursor: pointer;
    }
  }
}
</style>
