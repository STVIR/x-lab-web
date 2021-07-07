<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 24 }"
        :xl="{ span: 18 }"
      >
        <HeaderMenu />
        <Banner />
        <Introduce></Introduce>
        <InstallInfo />
        <CoreAbility></CoreAbility>
        <Example></Example>
        <CaseZoo></CaseZoo>
        <!-- <DocumentInfo /> -->
        <!-- <DataInfo /> -->
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
import Banner from './components/Banner/index.vue'
import Introduce from './components/Introduce/index.vue'
import CoreAbility from './components/CoreAbility/index.vue'
import Example from './components/Example/index.vue'
import CaseZoo from './components/CaseZoo/index.vue'

export default {
  name: 'Xad',
  components: {
    HeaderMenu,
    Banner,
    InstallInfo,
    DocumentInfo,
    DataInfo,
    Introduce,
    CoreAbility,
    Example,
    CaseZoo
  }
}
</script>
