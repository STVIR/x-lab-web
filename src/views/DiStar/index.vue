<template>
  <div class="home">
    <HeaderMenu />
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 24 }"
        :xl="{ span: 18 }"
      >
        <InstallInfo />
        <!-- <DocumentInfo /> -->
        <Example></Example>
        <Footer></Footer>
        <!-- <DataInfo /> -->
        <!-- <SourceCode></SourceCode> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from './components/HeaderMenu/index.vue';
import InstallInfo from './components/InstallInfo/index.vue';
import DocumentInfo from './components/DocumentInfo/index.vue';
import DataInfo from './components/DataInfo/index.vue';
import Example from './components/Example/index.vue';
import Footer from './components/Footer/index.vue';

export default {
  name: 'Xad',
  components: {
    HeaderMenu,
    InstallInfo,
    DocumentInfo,
    DataInfo,
    Example,
    Footer
  }
};
</script>
