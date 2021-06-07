<template>
  <div class="HeaderMenu-wraper">
    <div class="log">{{ logoText }}</div>
    <el-menu
      :default-active="activeIndex"
      class="menu-wraper"
      mode="horizontal"
      background-color="#0079fe"
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
          >{{ item.name }}</a>
          <span v-else class="item-content" @click="handleClickMenu(item)">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="String(index + 1)">
          <template #title>{{ item.name }}</template>
          <el-menu-item
            v-for="(child, childIndex) in item.children"
            :key="child.path"
            :index="`${index + 1}-${childIndex + 1}`"
          >{{ child.name }}</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { headerMenuConfig } from '../../../../../config/neverx.js'
import { isExternal } from '@/utils/validate'

export default {
  name: 'Home',

  data() {
    return {
      activeIndex: '',
      logoText: window.neverxConfig.headerMenuConfig.logoText,
      menuLists: window.neverxConfig.headerMenuConfig.menuLists
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClickMenu(item) {
      if (item.isGoAnchor) {
        this.handleAnchor(item.id)
      }
    },
    activeMenu() {
      const route = this.$route
      console.log('route', this.$route)
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    hasOneShowingChild(children = [], parent) {
      // When there is only one child router, the child router is displayed by default
      if (children.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (children.length === 0) {
        return true
      }

      return false
    },
    resolvePath(routePath) {
      console.log('routePath', routePath)
      if (isExternal(routePath)) {
        return routePath
      }
      // if (isExternal(this.basePath)) {
      //   return this.basePath;
      // }
      // return path.resolve(this.basePath, routePath);
      return routePath
    },
    // 滚动锚点
    handleAnchor(id) {
      // {
      //   block: "center",
      //   behavior: "smooth"
      // }
      document.querySelector(`#${id}`).scrollIntoView()
    }
  }
}
</script>

<style lang="scss" scoped>
.HeaderMenu-wraper {
  display: flex;
  width: 100%;
  .log {
    background-color: #0079fe;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    color: #fff;
 font-weight: 650;
    font-style: normal;
    font-size: 28px;
        width: 166px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .menu-wraper {
    flex: 1;
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
      }

      &.is-active {
        background: #0000ff !important;
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
      }
      &.is-active {
        :deep(.el-submenu__title) {
          background: #0000ff !important;
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
</style>
