<template>
  <div class="banner">
    <span class="banner-text">
      {{ bannerText }}
    </span>
    <span class="banner-text small">
      {{ bannerTextSmall }}
    </span>
  </div>
</template>

<script>
import { bannerConfig } from '../../../../../config/ss.js'
export default {
  data() {
    return {
      bannerText: bannerConfig.bannerText,
      bannerTextSmall: bannerConfig.bannerTextSmall
    }
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 74px;
  box-sizing: border-box;
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
</style>
