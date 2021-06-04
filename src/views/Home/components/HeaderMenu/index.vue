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
          <!-- <a class="link" v-if="item.isExternal" href="https://www.ele.me" target="_blank">订单管理</a> -->
          <span
            v-else
            class="item-content"
            @click="handleClickMenu(item)"
          >{{ item.name }}</span>
        </el-menu-item>
        <el-submenu v-else :index="String(index + 1)">
          <template #title>{{ item.name }}</template>
          <el-menu-item
            v-for="(child, childIndex) in item.children"
            :key="child.path"
            :index="`${index + 1}-${childIndex + 1}`"
            @click="handleClickMenu(child)"
          >{{ child.name }}</el-menu-item>
        </el-submenu>
      </div>
      <!-- <el-menu-item index="1" @click="handleAnchor('news')"
        >快速开始</el-menu-item
      >
      <el-menu-item index="2">文档</el-menu-item>
      <el-submenu index="3">
        <template #title>案例</template>
        <el-menu-item index="3-1">自动驾驶</el-menu-item>
        <el-menu-item index="3-2">星际争霸</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="handleAnchor('community')"
        >社区</el-menu-item
      >
      <el-menu-item index="5" @click="handleAnchor('teachingVideo')"
        >视频</el-menu-item
      > -->
      <!-- <div v-for="(item, index) in menuLists" :key="index">
        <template v-if="hasOneShowingChild(item.children, item)">
          <app-link :to="resolvePath(onlyOneChild.path)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)">
              {{ onlyOneChild.name }}
            </el-menu-item>
          </app-link>
        </template>

        <el-submenu
          v-else
          ref="subMenu"
          :index="resolvePath(item.path)"
          popper-append-to-body
        >
          <template v-slot:title>
            {{ onlyOneChild.name }}
          </template>
          <sidebar-item
            v-for="child in item.children"
            :key="child.path"
            :is-nest="true"
            :item="child"
            :base-path="resolvePath(child.path)"
            class="nest-menu"
          />
          <el-menu-item
            v-for="child in item.children"
            :key="child.id"
          >
            {{ child.name }}
          </el-menu-item>
        </el-submenu>
      </div> -->
    </el-menu>

  </div>
</template>

<script>
import { headerMenuConfig } from '../../../../../config/home.js'
import { isExternal } from '@/utils/validate'

export default {
  name: 'Home',

  data() {
    return {
      activeIndex: '',
      logoText: headerMenuConfig.logoText,
      menuLists: headerMenuConfig.menuLists
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClickMenu(item) {
      if (item.isGoAnchor) {
        this.handleAnchor(item.id)
        return
      }
      this.$router.push({
        path: item.path
      })
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
  // justify-content: center;
  background-color: #0079fe;
  .log {
    // background-color: #0079fe;
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
