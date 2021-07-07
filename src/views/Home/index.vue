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
        <Banner />
        <CoreAbility />
        <InstallInfo></InstallInfo>
        <SceneCase />
        <!-- <News /> -->
        <Community />
        <!-- <TeachingVideo /> -->
        <Footer />
      </el-col>
    </el-row>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderMenu from './components/HeaderMenu/index.vue';
import Banner from './components/Banner/index.vue';
import CoreAbility from './components/CoreAbility/index.vue';
import InstallInfo from './components/InstallInfo/index.vue';
import SceneCase from './components/SceneCase/index.vue';
import News from './components/News/index.vue';
import Community from './components/Community/index.vue';
import TeachingVideo from './components/TeachingVideo/index.vue';
import Footer from './components/Footer/index.vue';
export default {
  name: 'Home',
  components: {
    HeaderMenu,
    Banner,
    CoreAbility,
    InstallInfo,
    SceneCase,
    News,
    Community,
    TeachingVideo,
    Footer
  }
};
</script>
