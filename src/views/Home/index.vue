<template>
  <div class="home">
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <HeaderMenu />
        <Banner />
        <CoreAbility />
        <SceneCase />
        <News />
        <Community />
        <TeachingVideo />
        <Footer />
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderMenu from './components/HeaderMenu/index.vue'
import Banner from './components/Banner/index.vue'
import CoreAbility from './components/CoreAbility/index.vue'
import SceneCase from './components/SceneCase/index.vue'
import News from './components/News/index.vue'
import Community from './components/Community/index.vue'
import TeachingVideo from './components/TeachingVideo/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: 'Home',
  components: {
    HeaderMenu,
    Banner,
    CoreAbility,
    SceneCase,
    News,
    Community,
    TeachingVideo,
    Footer
  }
}
</script>
