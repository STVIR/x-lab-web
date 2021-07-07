<template>
  <div class="banner">
    <div class="left">
      <span class="banner-text">
        Welcome to the
        <br>
        Decision Intelligence
      </span>
      <span class="banner-text small">
        An open source decision intelligence engine that generalizes and accelerates
        <br>
         various environments, algorithms and computation pipelines.
 
      </span>
    </div>
    <div class="right">
      <div class="btns" @click="goStart">
         &nbsp; Install &nbsp;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerText: window.homeConfig.bannerConfig.bannerText,
      bannerTextSmall: window.homeConfig.bannerConfig.bannerTextSmall
    }
  },

  created() {
  },
  methods: {
    goStart() {
      this.$router.push({
        path: 'https://opendilab.github.io/DI-engine/installation/index.html'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  background-color: rgba(2, 167, 240, 1);
  // background-position: right bottom;
  background-repeat: repeat-x;
  background-attachment: scroll;
  width: 100%;
  height: 400px;
  background-image: url('../../../../../static/banners/bannerHome_02.png');
  // background-position: right bottom;
  background-repeat: repeat-x;
  background-attachment: scroll;
  // background-size: 4660px 462px;
  display: flex;
  justify-content: space-between;
  padding: 10px 180px;
  box-sizing: border-box;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    .banner-text {
      margin-top: 60px;
      font-family: 'Helvetica Neue';
      font-weight: 350;
      font-style: normal;
      font-size: 60px;
      text-align: left;
      color: #ffffff;
      &.small {
        font-family: 'FreightSans';
        font-weight: 450;
        font-size: 18px;
        margin-top: 86px;
        text-align: left;
        line-height: 30px;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 30px;

    .btns {
      display: inline-block;
      background-color: #f3f4f7;
      padding: 8px;
      border-radius:2px ;
      cursor: pointer;
      font-family: 'FreightSans';
    }
  }
}
</style>
