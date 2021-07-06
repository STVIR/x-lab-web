<template>
  <div id="neverxInstallInfo" class="neverxInstallInfo">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 20 }"
        :xl="{ span: 20 }"
      >
        <h3 class="title">
          {{ title }}
        </h3>
        <el-form ref="form" :model="form" label-position="left" label-width="150px">
          <div v-for="(formItem, formItemIndex) in formConfig" :key="formItemIndex">
            <el-form-item
              v-if="formItem.type === 'radioGroup'"
              :label="formItem.label"
            >
              <el-radio-group v-model="valueObj[`radio${formItemIndex}`]">
                <el-radio-button
                  v-for="(radio, radioIndex) in formItem.radioList"
                  :key="radioIndex"
                  :label="radio.label"
                >{{ radio.value }}</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              v-else-if="formItem.type === 'cmd'"
              class="text"
              :label="formItem.label"
            >
              {{ formatString(valueObj) }}
            </el-form-item>
            <!-- <el-form-item v-else class="text" :label="formItem.label">
          {{ formItem.value }}
        </el-form-item> -->
          </div>
        </el-form>
        <!--
    <div class="neverxInstallInfo-example">
      <h4 class="title">
        {{ exampleInfo.title }}
      </h4>
      <div class="content">
        <div
          class="case"
          v-for="(caseItem, caseIndex) in exampleInfo.caseLists"
          :key="caseIndex"
        >
          <div class="case-title">{{ caseItem.title }}</div>
          <div class="case-content">{{ caseItem.content }}</div>
        </div>
      </div>
    </div> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: window.homeConfig.installInfoConfig.title,
      formConfig: window.homeConfig.installInfoConfig.formConfig,
      cmdObj: window.homeConfig.installInfoConfig.cmdObj,
      valueObj: window.homeConfig.installInfoConfig.valueObj,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    formatString(obj) {
      let tem = Object.values(obj)
      tem = tem.toString().replaceAll(',', '')

      return this.cmdObj[tem] || ''
    }
  }
}
</script>

<style lang="scss" scoped>
.neverxInstallInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
    font-size: 32px;
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
  .neverxInstallInfo-example {
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


<style lang="scss">
.el-radio-button__orig-radio:checked+.el-radio-button__inner {
    color:#1abc9c;
    background-color: #243955;
    border-color: #243955;
    -webkit-box-shadow: -1px 0 0 0 #409eff;
    box-shadow: -1px 0 0 0 #243955;
}
  

  .el-radio-button__inner:hover {
    color: #1abc9c;
}
</style>
