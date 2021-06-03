<template>
  <div id="installInfo" class="InstallInfo">
    <h3 class="title">
      {{ title }}
    </h3>
    <el-form ref="form" :model="form" label-position="left" label-width="150px">
      <div v-for="(formItem, formItemIndex) in formConfig" :key="formItemIndex">
        <el-form-item
          v-if="formItem.type === 'radioGroup'"
          :label="formItem.label"
        >
          <el-radio-group v-model="radio1">
            <el-radio-button
              v-for="(radio, radioIndex) in formItem.radioList"
              :key="radioIndex"
              :label="radio.label"
            >{{ radio.value }}</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-else class="text" :label="formItem.label">
          {{ formItem.value }}
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import { installInfoConfig } from '../../../../../config/xad.js'

export default {
  data() {
    return {
      title: installInfoConfig.title,
      formConfig: installInfoConfig.formConfig,
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
.InstallInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
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
}
</style>
