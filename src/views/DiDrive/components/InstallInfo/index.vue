<template>
  <div id="ssInstallInfo" class="ssInstallInfo section-wraper">
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
        <div class="requirements installInfoItem">
          <h5 class="title">
            Requirements
          </h5>
          <div class="content">
            <p>
              DI-drive can run with <strong>Ubuntu 16.04, 18.04</strong> or
              <strong>Windows 10, GPU</strong> is necessary
            </p>
            <p>
              DI-drive requires <strong>DI-engine, Carla server</strong> and
              <strong>Carla PythonAPI</strong> to run.
            </p>
          </div>
        </div>

        <!-- </div> -->
        <div class="soureCode  installInfoItem ">
          <h5 class="title">
            Install DI-dirve from soure code
          </h5>
          <div class="content">
            <div class="code">
              <p>
                git clone git@github.com:opendilab/DI-drive.git
              </p>
              <p>
                cd DI-drive
              </p>
              <p>
                pip install —user .
              </p>
            </div>
          </div>
        </div>

        <div class="guidance  installInfoItem ">
          <h5 class="title">
            Guidance
          </h5>
          <div class="content">
            <p>
              Follow <strong>Installation guide </strong> of details about
              installation
            </p>
            <p>Follow <strong>Tutorial doc</strong> to start using DI-drive</p>
            <p>
              Check the <strong>API</strong> to look up modules and methods
              available
            </p>
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
      title: window.ssConfig.installInfoConfig.title,
      formConfig: window.ssConfig.installInfoConfig.formConfig,
      cmdObj: window.ssConfig.installInfoConfig.cmdObj,
      valueObj: window.ssConfig.installInfoConfig.valueObj,
      exampleInfo: window.ssConfig.installInfoConfig.exampleInfo,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      radio1: '上海',
      radio2: '上海',
      radio3: '上海'
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    formatString(obj) {
      let tem = Object.values(obj);
      tem = tem.toString().replaceAll(',', '');

      return this.cmdObj[tem] || '';
    }
  }
};
</script>

<style lang="scss" scoped>
.ssInstallInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }

  .installInfoItem {
    margin-bottom: 20px;
    .title {
      font-size: 24px;
      padding-left: 40px;
      margin: 0;
    }
    .content {
      text-align: left;
      padding-left: 60px;
    }

    &.soureCode {
      .code {
        background: #f2f2f2;
        padding: 10px;
        text-align: left;
      }
    }
    &.guidance {
      .code {
        background: #f2f2f2;
        padding: 10px;
        text-align: left;
      }
    }
  }

  .text {
    :deep(.el-form-item__content) {
      background: #f2f2f2;
      padding: 10px;
      text-align: left;
    }
  }
  :deep(.el-form-item__content) {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
  }
  .ssInstallInfo-example {
    .title {
      font-size: 32px;
      font-weight: 600;
    }

    .content {
      text-align: left;
      padding-left: 34px;

      .case-title {
        font-size: 22px;
        font-weight: 600;
      }
      .case-content {
        line-height: 48px;
        text-indent: 20px;
      }
    }
  }
}
</style>
