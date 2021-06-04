# 首页配置

首页配置包括 HeaderMenu(菜单栏) 、Banner  、核心能力 、场景案例 、最新消息 、社区信息 、教学视频 、Footer

## HeaderMenu(菜单栏)

```
// HeaderMenu 
export const headerMenuConfig = {
  logoText: 'Oria',
  menuLists: [
    {
      path: "/neverx",
      name: "快速开始",
    },
    {
      isExternal: true,
      path: "https://www.baidu.com/",
      name: "文档",
    },
    {
      path: "/case",
      name: "案例",
      children: [
        {
          path: "/xad",
          name: "自动驾驶"
        },
        {
          path: "/ss",
          name: "星际争霸"
        },
      ]
    },
    {
      path: "/community",
      id: "community",
      name: "社区",
      isGoAnchor: true
    },
    {
      path: "/teachingVideo",
      id: "teachingVideo",
      name: "教程",
      isGoAnchor: true
    },
  ]
}
```

### headerMenuConfig

| name      | 说明                                                         | 例子             |
| :-------- | :----------------------------------------------------------- | :--------------- |
| logoText  | 菜单上logo字母,需要更改菜单的logo文字直接更改 logoText 中的值 | Oria             |
| menuLists | 导航菜单的配置,具体每一项的配置查看下方的 menuItem           | 详情查看上方代码 |

#### menuItem

| name       | 说明                                                         | 例子                                            |
| :--------- | :----------------------------------------------------------- | :---------------------------------------------- |
| path       | 切换页面,**除了跳转指定的外部链接地址可修改(同时需要配置isExternal为true)**,系统内部页面切换不能修改 | https://www.baidu.com/ 这为外部链接可以替换更改 |
| name       | 在导航栏中展示的菜单名                                       | 快速开始                                        |
| isExternal | 标记是否为外部链接,需path为外部链接配合使用,否则报错 ,跳转到系统页面的菜单可无需设置此参数 | true                                            |
| children   | 当页面有二级菜单需要配置 ,children中的每一项path和name 解析同上 | 有二级菜单必须配置                              |
| isGoAnchor | 配置是否为锚点定位页面的某一个模块,需要和id的配合一起使用,不可修改,有更改需要可联系开发人员 | true                                            |
| id         | 某一个模块内容的id,和isGoAnchor配合使用定位id的内容配置,id不可修改,有更改需要可联系开发人员 | teachingVideo                                   |







## Banner  

```
// Banner 
export const bannerConfig = {
  bannerText: "From research to production？", // 正常
  bannerTextSmall: "NeverX is X-Lab Deep Reinforcement Learning Framework System，……", // 小号
}
```

### bannerConfig

| name            | 说明                                                         | 例子                                                         |
| :-------------- | :----------------------------------------------------------- | ------------------------------------------------------------ |
| bannerText      | 定义banner上方中展示的一些大文字,此字号为大字体(48px),若需要替换直接更改bannerText对应的值 | From research to production？                                |
| bannerTextSmall | 定义banner上方中展示的一些小文字,此字号为小字体(18px),若需要替换直接更改bannerTextSmall对应的值 | NeverX is X-Lab Deep Reinforcement Learning Framework System，…… |



## 核心能力

```
// 核心能力 
export const coreAbilityConfig = {
  title: "核心能力",
  coreAbilityLists: [
    {
      title: '特性1',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },
    {
      title: '特性2',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },
    {
      title: '特性3',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },
    {
      title: '特性4',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },


  ]
}

```

### coreAbilityConfig

| name             | 说明                                                         | 例子           |
| :--------------- | :----------------------------------------------------------- | -------------- |
| title            | 标题,可更改,直接替换title对应的值                            | 核心能力       |
| coreAbilityLists | 核心能力,下面的每一项内容数据,具体每一项的说明查看下方coreAbilityItem | 查看上面代码块 |

#### coreAbilityItem

| name             | 说明                                                         | 例子           |
| :--------------- | :----------------------------------------------------------- | -------------- |
| title            | 对应每一列的标题,标题,可更改,直接替换title对应的值           | 核心能力       |
| coreAbilityLists | 核心能力,下面的每一项内容数据,具体每一项的说明查看下方coreAbilityItem | 查看上面代码块 |



## 场景案例

| 参数         | 说明                                                         | 类型    | 可选值         | 默认值 |
| :----------- | ------------------------------------------------------------ | :------ | :------------- | :----- |
| prop         | 对应列内容的字段名                                           | String  | —              | —      |
| label        | 显示的标题                                                   | String  | —              | —      |
| width        | 对应列的宽度                                                 | String  | —              | —      |
| minWidth     | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string  | —              | —      |
| showOverflow | 当内容过长被隐藏时显示 tooltip                               | Boolean | true,false     | false  |
| sortable     | 对应列是否可以排序，监听 CardTableScrollScreen的 sort-change 事件，执行对应操作 | Boolean | true,false     | false  |
| align        | 表格文字对齐                                                 | String  | left,right     | 'left' |
| flex         | 设置弹性布局值                                               | Number  | —              | —      |
| fixed        | 横向滚动模式，固定左侧以及右侧,目前就系统的需求，只做了第一列以及最后一列（操作列）的固定，后续可优化 | String  | 'left','right' | —      |



## 最新消息 

| 参数         | 说明                                                         | 类型    | 可选值         | 默认值 |
| :----------- | ------------------------------------------------------------ | :------ | :------------- | :----- |
| prop         | 对应列内容的字段名                                           | String  | —              | —      |
| label        | 显示的标题                                                   | String  | —              | —      |
| width        | 对应列的宽度                                                 | String  | —              | —      |
| minWidth     | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string  | —              | —      |
| showOverflow | 当内容过长被隐藏时显示 tooltip                               | Boolean | true,false     | false  |
| sortable     | 对应列是否可以排序，监听 CardTableScrollScreen的 sort-change 事件，执行对应操作 | Boolean | true,false     | false  |
| align        | 表格文字对齐                                                 | String  | left,right     | 'left' |
| flex         | 设置弹性布局值                                               | Number  | —              | —      |
| fixed        | 横向滚动模式，固定左侧以及右侧,目前就系统的需求，只做了第一列以及最后一列（操作列）的固定，后续可优化 | String  | 'left','right' | —      |



## 教学视频

| 参数         | 说明                                                         | 类型    | 可选值         | 默认值 |
| :----------- | ------------------------------------------------------------ | :------ | :------------- | :----- |
| prop         | 对应列内容的字段名                                           | String  | —              | —      |
| label        | 显示的标题                                                   | String  | —              | —      |
| width        | 对应列的宽度                                                 | String  | —              | —      |
| minWidth     | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string  | —              | —      |
| showOverflow | 当内容过长被隐藏时显示 tooltip                               | Boolean | true,false     | false  |
| sortable     | 对应列是否可以排序，监听 CardTableScrollScreen的 sort-change 事件，执行对应操作 | Boolean | true,false     | false  |
| align        | 表格文字对齐                                                 | String  | left,right     | 'left' |
| flex         | 设置弹性布局值                                               | Number  | —              | —      |
| fixed        | 横向滚动模式，固定左侧以及右侧,目前就系统的需求，只做了第一列以及最后一列（操作列）的固定，后续可优化 | String  | 'left','right' | —      |



## Footer

| 参数         | 说明                                                         | 类型    | 可选值         | 默认值 |
| :----------- | ------------------------------------------------------------ | :------ | :------------- | :----- |
| prop         | 对应列内容的字段名                                           | String  | —              | —      |
| label        | 显示的标题                                                   | String  | —              | —      |
| width        | 对应列的宽度                                                 | String  | —              | —      |
| minWidth     | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string  | —              | —      |
| showOverflow | 当内容过长被隐藏时显示 tooltip                               | Boolean | true,false     | false  |
| sortable     | 对应列是否可以排序，监听 CardTableScrollScreen的 sort-change 事件，执行对应操作 | Boolean | true,false     | false  |
| align        | 表格文字对齐                                                 | String  | left,right     | 'left' |
| flex         | 设置弹性布局值                                               | Number  | —              | —      |
| fixed        | 横向滚动模式，固定左侧以及右侧,目前就系统的需求，只做了第一列以及最后一列（操作列）的固定，后续可优化 | String  | 'left','right' | —      |

