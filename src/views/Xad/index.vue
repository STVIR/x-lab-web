<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <HeaderMenu />
        <InstallInfo />
        <DocumentInfo />
        <DataInfo />
        <!-- <SourceCode></SourceCode> -->

      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from './components/HeaderMenu/index.vue'
import InstallInfo from './components/InstallInfo/index.vue'
import DocumentInfo from './components/DocumentInfo/index.vue'
import DataInfo from './components/DataInfo/index.vue'

export default {
  name: 'Xad',
  components: {
    HeaderMenu,
    InstallInfo,
    DocumentInfo,
    DataInfo
  }
}
</script>
