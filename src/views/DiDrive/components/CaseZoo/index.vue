<template>
  <div id="ssCaseZoo" class="ssCaseZoo section-wraper">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 21 }"
        :xl="{ span: 21 }"
      >
        <h3 class="title">
          {{ title }}
        </h3>
        <div class="ssCaseZoo-warper">
          <div class="ssCaseZoo-content">
            <div class="desc">
              DI-drive builds Casezoo to make Auto-Driving simulation closer to
              real driving scenarios.
            </div>
            <div class="content">
              <p>
                - Scenario designed from <strong>real data </strong> and
                <strong>road test </strong>
              </p>
              <p>
                - Scenario operating in <strong>fixed logic and order </strong>
              </p>
              <p>- Suitable for <strong>IL & RL training </strong></p>
              <p>
                - Interaced with <strong>same interfaces </strong>in ``Env``
              </p>
            </div>

            <div class="desc">
              Casezoo owns <strong>8 individual scanrios </strong>and
              <strong>18 route scenario </strong> of varying difficulty. Route
              scenario runs in a town map, and cross by triggering some
              individual scenarios. The individual scenario defines npc
              vehicles, walkers and traffic light behaviors, together with
              criteria. It succeeds only if all the behaviors happened obeying a
              certain order and logic, and may fail if the criteria raise
              failure status.
            </div>
          </div>
          <img class="img" :src="imgUrl" alt="" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: window.ssConfig.caseZooConfig.title,
      imgUrl: window.ssConfig.caseZooConfig.imgUrl
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>

<style lang="scss" scoped>
.ssCaseZoo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }

  .ssCaseZoo-warper {
    display: flex;
    justify-content: space-between;
  }
  .ssCaseZoo-content {
    // color: #0000ff;
    // text-align: left;
    // text-indent: 20px;
    // padding: 2px 0;
    margin-right: 38px;
    width: 50%;
    text-align: left;
    line-height: 28px;
    .content{
      padding-left: 20px;
          line-height: 20px;
    }
  }
  .img {
    width: 50%;

    // height: 546px;
  }
}
</style>
