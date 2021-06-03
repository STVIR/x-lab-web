<template>
  <div id="dataInfo" class="dataInfo">
    <h3 class="title">
      {{ title }}
    </h3>
    <div class="dataInfo-content">
      <div class="content-item content-dataDetail ">
        <h4 class="dataDetail-title content-title">
          {{ dataDetail.title }}
        </h4>
        <p class="content-text">{{ dataDetail.content }}</p>

        <div class="dataInfo-table">
          <el-table :data="dataDetail.tableData" border style="width: 100%">
            <el-table-column
              v-for="col in dataDetail.columns"
              :key="col.prop"
              :prop="col.prop"
              :label="col.label"
              :width="col.width"
            >
              <template #default="scope">
                <img
                  v-if="col.isPicture"
                  class="img"
                  :src="scope.row[col.prop]"
                >
                <span v-else>{{ scope.row[col.prop] }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="content-item content-dataFormat">
        <h4 class="dataFormat-title content-title">
          {{ dataFormat.title }}
        </h4>
        <p class="content-text">{{ dataFormat.content }}</p>
      </div>
      <div class="content-item content-dataBenchmark">
        <h4 class="dataBenchmark-title content-title">
          {{ dataBenchmark.title }}
        </h4>
        <div class="dataBenchmark-table">
          <el-table :data="dataBenchmark.tableData" border style="width: 100%">
            <el-table-column
              v-for="col in dataBenchmark.columns"
              :key="col.prop"
              :prop="col.prop"
              :label="col.label"
              :width="col.width"
            >
              <template #default="scope">
                <img
                  v-if="col.isPicture"
                  class="img"
                  :src="scope.row[col.prop]"
                >
                <span v-else>{{ scope.row[col.prop] }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="content-item content-dataDownload">
        <h4 class="dataDownload-title content-title">
          {{ dataDownload.title }}
        </h4>

        <div class="dataDownload-content">
          <a
            v-for="(downloadItem, downloadIndex) in dataDownload.content"
            :key="downloadIndex"
            class="download-item"
            :href="downloadItem.link"
            :download="downloadItem.name"
            target="_blank"
          >{{ downloadItem.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataInfoConfig } from '../../../../../config/xad.js'

export default {
  data() {
    return {
      title: dataInfoConfig.title,
      dataDetail: dataInfoConfig.dataDetail,
      dataFormat: dataInfoConfig.dataFormat,
      dataBenchmark: dataInfoConfig.dataBenchmark,
      dataDownload: dataInfoConfig.dataDownload
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
.dataInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
  }
  .content-item {
    text-align: left;
    text-indent: 20px;
    line-height: 30px;
    .content-text {
      text-indent: 20px;
    }
    .dataDownload-content {
      display: flex;
      flex-wrap: wrap;
      .download-item {
        width: 100%;
        text-decoration: underline;
        color: #02a7f0;
      }
    }
    .img {
      width: 100%;
    }
  }
}
</style>
