
// HeaderMenu 
export const headerMenuConfig = {
  logoText: 'ss',
  menuLists: [
    {
      path: "/ssInstallInfo",
      name: "安装",
      id: "ssInstallInfo",
      isGoAnchor: true
    },
    {
      path: "/ssDocumentInfo",
      name: "文档",
      id: "ssDocumentInfo",
      isGoAnchor: true
    },
    {
      path: "/ssDataInfo",
      name: "数据",
      id: "ssDataInfo",
      isGoAnchor: true
    },

    {
      id: "ssSourceCode",
      name: "源码",
      isExternal:true,
      path: "https://www.baidu.com/",
    },

  ]
}

// Banner 
export const bannerConfig = {
  bannerText: "SS", // 正常
  bannerTextSmall: "SS is X-Lab Deep Reinforcement Learning《星际争霸2》是一款RTS（即时战略）游戏，说白了就是造农民采矿、造建筑、造兵、攀科技，最后派兵拆光对手的建筑 System", // 小号
}


// 安装
export const installInfoConfig = {
  title: '安装',

  formConfig: [
    {
      label: 'Version',
      type: 'radioGroup',
      radioList: [
        {
          label: '0.1',
          value: '0.1'
        },
        {
          label: '0.2',
          value: '0.2'
        },
        {
          label: '0.3',
          value: '0.3'
        },
        {
          label: '0.4',
          value: '0.4'
        }
      ]
    },
    {
      label: 'OS',
      type: 'radioGroup',
      radioList: [
        {
          label: 'Linux',
          value: 'Linux'
        },
        {
          label: 'Windows',
          value: 'Windows'
        },
        {
          label: 'MacOS',
          value: 'MacOS'
        }
      ]
    },
    {
      label: 'Package',
      type: 'radioGroup',
      radioList: [
        {
          label: 'Pip',
          value: 'Pip'
        },
        {
          label: 'Source',
          value: 'Source'
        }
      ]
    },
    {
      label: 'Run this Cmd',
      type: 'cmd',
      value: `git clone http://gitlab.bj.sensetime.com/open-XLab/cell/nerveX.git cd
    nerveX source r0.3.2 pip install . --user pip install -e . --userf`
    }
  ],
  valueObj: { 
    radio0: '0.1',
    radio1: 'Linux',
    radio2: 'Pip'
  },
  cmdObj:{
    "0.1LinuxPip":"git clone http://gitlab.bj.sensetime.com/open-XLab/cell/nerveX.git cd nerveX source r0.3.2 pip install . --user pip install -e . --userf",
    "0.1LinuxSource":"0.1LinuxSource",
    "0.1WindowsPip":"0.1WindowsPip",
    "0.1WindowsSource":"0.1WindowsSource",
    "0.1MacOSPip":"0.1MacOSPip",
    "0.1MacOSSource":"0.1MacOSSource",

    "0.2LinuxPip":"0.2LinuxPip",
    "0.2LinuxSource":"0.2LinuxSource",
    "0.2WindowsPip":"0.2WindowsPip",
    "0.2WindowsSource":"0.2WindowsSource",
    "0.2MacOSPip":"0.2MacOSPip",
    "0.2MacOSSource":"0.2MacOSSource",

    "0.3LinuxPip":"0.3LinuxPip",
    "0.3LinuxSource":"0.3LinuxSource",
    "0.3WindowsPip":"0.3WindowsPip",
    "0.3WindowsSource":"0.3WindowsSource",
    "0.3MacOSPip":"0.3MacOSPip",
    "0.3MacOSSource":"0.3MacOSSource",

    "0.4LinuxPip":"0.4LinuxPip",
    "0.4LinuxSource":"0.4LinuxSource",
    "0.4WindowsPip":"0.4WindowsPip",
    "0.4WindowsSource":"0.4WindowsSource",
    "0.4MacOSPip":"0.4MacOSPip",
    "0.4MacOSSource":"0.4MacOSSource",
  },
  exampleInfo: {
    title: "示例",
    caseLists: [
      {
      title: "SL训练示例",
      content: "tag"
    },
      {
      title: "SL训练示例",
      content: "tag"
    },
      {
      title: "人机对战示例",
      content: "文本标签"
    },
  ]

  }
}
// 文档
export const documentInfoConfig = {
  title: "文档",
  content: "open-xlab.pages.gitlab.bj.sensetime.com/cell/nerveX/guide/index.html"
}

// 数据 dataDetail: 数据详情介绍  dataFormat:数据格式 dataBenchmark:数据评测  dataDownload:数据下载
export const dataInfoConfig = {
  title: "数据",
  replay: {
    title: "replay",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sunt repudiandae earum animi itaque voluptatibus blanditiis! Quasi enim dolor vero consequatur consectetur. Vitae quia omnis natus voluptatem ratione dolor eaque.",
  },
  model: {
    title: "model",
    content: "Lorem ipsum dolor sit ame",

  },
  video: {
    title: "视频",
    videoLink: '//vjs.zencdn.net/v/oceans.mp4',
    vedeoImg: require('@/assets/images/ss/video/video_image_01.png'), //视频展示的封面

  },
  

}


