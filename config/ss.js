var ssConfig = {}

// HeaderMenu 
ssConfig.headerMenuConfig = {
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
      isExternal: true,
      path: "https://www.baidu.com/",
    },

  ]
}

// Banner 
ssConfig.bannerConfig = {
  bannerText: "DI-drive", // 正常
  bannerTextSmall: `Build crucial bridge between
  Autonomous Driving and Deep Learning`, // 小号
}


// 安装
ssConfig.installInfoConfig1 = {
  title: 'INSTALLATION',

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
  cmdObj: {
    "0.1LinuxPip": "git clone http://gitlab.bj.sensetime.com/open-XLab/cell/nerveX.git cd nerveX source r0.3.2 pip install . --user pip install -e . --userf",
    "0.1LinuxSource": "0.1LinuxSource",
    "0.1WindowsPip": "0.1WindowsPip",
    "0.1WindowsSource": "0.1WindowsSource",
    "0.1MacOSPip": "0.1MacOSPip",
    "0.1MacOSSource": "0.1MacOSSource",

    "0.2LinuxPip": "0.2LinuxPip",
    "0.2LinuxSource": "0.2LinuxSource",
    "0.2WindowsPip": "0.2WindowsPip",
    "0.2WindowsSource": "0.2WindowsSource",
    "0.2MacOSPip": "0.2MacOSPip",
    "0.2MacOSSource": "0.2MacOSSource",

    "0.3LinuxPip": "0.3LinuxPip",
    "0.3LinuxSource": "0.3LinuxSource",
    "0.3WindowsPip": "0.3WindowsPip",
    "0.3WindowsSource": "0.3WindowsSource",
    "0.3MacOSPip": "0.3MacOSPip",
    "0.3MacOSSource": "0.3MacOSSource",

    "0.4LinuxPip": "0.4LinuxPip",
    "0.4LinuxSource": "0.4LinuxSource",
    "0.4WindowsPip": "0.4WindowsPip",
    "0.4WindowsSource": "0.4WindowsSource",
    "0.4MacOSPip": "0.4MacOSPip",
    "0.4MacOSSource": "0.4MacOSSource",
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


// 安装
ssConfig.installInfoConfig = {
  title: 'INSTALLATION',
  // Requirements:[

  // ]
}
// 文档
ssConfig.documentInfoConfig = {
  title: "文档",
  content: "open-xlab.pages.gitlab.bj.sensetime.com/cell/nerveX/guide/index.html"
}


// 文档
ssConfig.introduceConfig = {
  title: "DI-drive",
  content: `
   is a Deep Learning platform for Autonomous Driving simulation. DI-drive develops driving policy with DI-engine and mainly uses Carla simulator. DI-drive supports various Imitation Learning, Reinforcement Learning and other algorithms, with multi-model input and output, freely customized visualization and simple entry.`,
  imgUrl: "./static/images/ss/introduce/icon.png"
}


// 核心能力 
ssConfig.coreAbilityConfig = {
  title: "KEY FEATURES",
  coreAbilityLists: [
    {
      title: 'Auto-driving simulation',
      desc:
        'DI-drive provides unified interfaces for lightweight simulators as well as complex ones. Users can customize the input and output of the policy and simply call these interfaces to complete simulation.',
    },
    {
      title: 'Simple training process',
      desc:
        `DI-drive provides a variety of modules  to ease the training of driving policies, including data collection, optimization and evaluation for Imitation Learning, standard "gym.Env" instances for Reinforcement Learning, and simple usage of DI-engine.
       `,
    },
    {
      title: 'Modular design',
      desc:
        `DI-drive defines policy in a flexible, polymorphic and efficient way. DI-drive can adapt to all existing academic literatures and support complex training tasks across methods, models, datasets, and even across simulators.`,
    },
    {
      title: 'Casezoo set',
      desc:
        `DI-drive designs a Casezoo simulation set, by integrating existing Auto-Driving evaluation indicators, scenarios and tools in both academia and industry.`        ,
    },


  ]
}




// Example

ssConfig.exampleConfig = {
  title:"EXAMPLE",
  imgUrl: "./static/images/ss/introduce/example.png"

}

// CaseZoo
ssConfig.exampleConfig = {
  title:"EXAMPLE",
  imgUrl: "./static/images/ss/introduce/example.png"

}



// 数据 dataDetail: 数据详情介绍  dataFormat:数据格式 dataBenchmark:数据评测  dataDownload:数据下载
ssConfig.dataInfoConfig = {
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
    vedeoImg: './static/images/ss/video/video_image_01.png', //视频展示的封面
  },

}

