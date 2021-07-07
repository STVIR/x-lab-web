<template>
  <div class="HeaderMenu-wraper" ref="header">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 24 }"
        :xl="{ span: 18 }"
      >
        <div class="HeaderMenu-container">
          <div class="logo">
            <img :src="logoText" alt="" />
          </div>
          <el-menu
            :default-active="activeIndex"
            class="menu-wraper"
            mode="horizontal"
            background-color="#0382fd"
            text-color="#CCCCCC"
            active-text-color="#fff"
            @select="handleSelect"
          >
            <div
              v-for="(item, index) in menuLists"
              :key="item.path"
              class="menu-item"
            >
              <el-menu-item v-if="!item.children" :index="String(index + 1)">
                <a
                  v-if="item.isExternal"
                  :href="item.path"
                  class="item-content"
                  target="_blank"
                  >{{ item.name }}</a
                >
                <!-- <a class="link" v-if="item.isExternal" href="https://www.ele.me" target="_blank">订单管理</a> -->
                <span
                  v-else
                  class="item-content"
                  @click="handleClickMenu(item)"
                  >{{ item.name }}</span
                >
              </el-menu-item>
              <el-submenu v-else :index="String(index + 1)">
                <template #title>{{ item.name }}</template>
                <el-menu-item
                  v-for="(child, childIndex) in item.children"
                  :key="child.path"
                  :index="`${index + 1}-${childIndex + 1}`"
                  @click.capture="handleClickMenu(child)"
                  >{{ child.name }}</el-menu-item
                >
              </el-submenu>
            </div>
          </el-menu>
          <div class="link">
            <a href="https://github.com/opendilab/DI-engine" target="_blank">Github</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { isExternal } from '@/utils/validate';
import scrollTop from '../../../mixins/scrollTop.js';

export default {
  name: 'Home',
  mixins: [scrollTop],
  data() {
    return {
      activeIndex: '',
      logoText: window.homeConfig.headerMenuConfig.logoText,
      menuLists: window.homeConfig.headerMenuConfig.menuLists
    };
  },

  mounted() {
    console.log('window.config', window.homeConfig);
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClickMenu(item) {
      if (item.isGoAnchor) {
        this.handleAnchor(item.id);
        return;
      }
      this.$router.push({
        path: item.path
      });
    },
    activeMenu() {
      const route = this.$route;
      console.log('route', this.$route);
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    hasOneShowingChild(children = [], parent) {
      // When there is only one child router, the child router is displayed by default
      if (children.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (children.length === 0) {
        return true;
      }

      return false;
    },
    resolvePath(routePath) {
      console.log('routePath', routePath);
      if (isExternal(routePath)) {
        return routePath;
      }
      // if (isExternal(this.basePath)) {
      //   return this.basePath;
      // }
      // return path.resolve(this.basePath, routePath);
      return routePath;
    },
    // 滚动锚点
    handleAnchor(id) {
      // {
      //   block: "center",
      //   behavior: "smooth"
      // }
      document.querySelector(`#${id}`).scrollIntoView();
    }
  }
};
</script>

<style lang="scss" scoped>
.HeaderMenu-wraper1 {
  display: flex;
  width: 100%;
  // justify-content: center;
  background-color: #4b82c7;
  height: 80px;

  .logo {
    img {
      // width: 178px;
      height: 60px;
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .menu-wraper {
    // flex: 1;
    display: flex;

    // .link {
    //   display: inline-block;
    //   width: 100%;
    //   height: 100%;
    // }
    .el-menu-item {
      // padding: 0 40px;
      font-size: 16px;
      height: 60px;
      line-height: 60px;
      border-bottom-color: initial !important;
      border-bottom: 0px;

      padding: 0px;
      .item-content {
        padding: 0 40px;
        display: inline-block;
        font-weight: 650;
        font-style: normal;
        font-size: 16px;
        color: #cccccc;
      }

      &.is-active {
        background: #162133 !important;
        border-bottom: 0px;
        border-bottom-color: initial !important;
      }
    }

    .el-submenu {
      :deep(.el-submenu__title) {
        padding: 0 40px;
        font-size: 16px;
        height: 60px;
        line-height: 60px;
        border-bottom-color: initial !important;
        border-bottom: 0px;
        // padding: 0 40px;
        // display: inline-block;
        font-weight: 650;
        // font-style: normal;
        // font-size: 16px;
        color: #cccccc;
      }
      &.is-active {
        :deep(.el-submenu__title) {
          background: #162133 !important;
          border-bottom: 0px;
          border-bottom-color: initial !important;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-popper {
  &.is-light {
    background: transparent !important;
    border: none !important;
  }
}

.el-menu--horizontal {
  .el-menu-item {
    font-weight: 650;
  }
}
</style>
