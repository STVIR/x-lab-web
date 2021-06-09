<template>
  <div class="coreAbility-wraper section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <h1 class="coreAbility-title">
          {{ title }}
        </h1>
        <div class="coreAbility-content">
          <div
            v-for="(item, index) in coreAbilityLists"
            :key="index"
            class="content-item"
          >
            <h3 class="item-title">{{ item.title }}</h3>
            <div class="item-content">
              {{ item.desc }}
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
      title: window.homeConfig.coreAbilityConfig.title,
      coreAbilityLists: window.homeConfig.coreAbilityConfig.coreAbilityLists
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
.coreAbility-wraper {
  // box-shadow: 0 2px 12px 0 #dddddd;
  box-shadow: 0 4px 12px 0 #f3f3f3;
  // padding: 50px 64px;
  .coreAbility-title {
    text-align: left;
    font-size: 32px;
  }

  .coreAbility-content {
    display: flex;
    flex-wrap: wrap;
    .content-item {
      width: 240px;
      text-align: left;
      padding: 0px 20px;
      margin-bottom: 30px;
      .item-title {
        font-size: 24px;
      }
      .item-content {
        font-family: 'ArialMT', 'Arial', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        line-height: 1.5;
      }
    }
  }
}

@media only screen and (max-width: 1380px) {
  .content-item{
   padding: 0px 18px !important;
  }
}
</style>
