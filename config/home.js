var homeConfig = {}
// HeaderMenu 
homeConfig.headerMenuConfig = {
  logoText: './static/logos/资源 26@4x.png',
  menuLists: [
    {
      path: "/neverx",
      name: "GET STARTED",
    },
    {
      isExternal: true,
      path: "https://www.baidu.com/",
      name: "DOCUMENTS",
    },
    {
      path: "/dizoo",
      // id: "teachingVideo",
      name: "DI-ZOO",
      // isGoAnchor: true
    },
    {
      path: "/case",
      name: "DI-X",
      redirect: "/case/diDrive",
      children: [
        {
          path: "/diDrive",
          name: "DI-dirve"
        },
        {
          path: "/diStar",
          name: "DI-star"
        },
      ]
    },
    {
      path: "/community",
      id: "community",
      name: "COMMUNITY",
      isGoAnchor: true
    },
    // {
    //   path: "/teachingVideo",
    //   id: "teachingVideo",
    //   name: "教程",
    //   isGoAnchor: true
    // },
  ]
}

// Banner 
homeConfig.bannerConfig = {
  bannerText: "From research to production？", // 正常
  bannerTextSmall: "NeverX is X-Lab Deep Reinforcement Learning Framework System，……", // 小号
}


// 核心能力 
homeConfig.coreAbilityConfig = {
  title: "KEY FEATURES",
  coreAbilityLists: [
    {
      title: 'sss',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },
    {
      title: 'sss',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },
    {
      title: 'sss',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },
    {
      title: 'sss',
      desc:
        'Transition seamlessly between eager and graph modes with TorchScript, and accelerate the path to production with TorchServe.',
    },


  ]
}

// 安装
homeConfig.installInfoConfig = {
  title: 'INSTALL DI',
  formConfig: [{
      label: 'Version',
      type: 'radioGroup',
      value: "",
      radioList: [
        // {
        //   label: '0.1',
        //   value: '0.1'
        // },
        {
          label: '0.2',
          value: '0.2'
        },
        // {
        //   label: '0.3',
        //   value: '0.3'
        // },
        // {
        //   label: '0.4',
        //   value: '0.4'
        // }
      ]
    },
    {
      label: 'OS',
      type: 'radioGroup',
      radioList: [{
          label: 'Linux',
          value: 'Linux'
        },
        {
          label: 'Windows',
          value: 'Windows'
        },
        // {
        //   label: 'MacOS',
        //   value: 'MacOS'
        // }
      ]
    },
    {
      label: 'Package',
      type: 'radioGroup',
      radioList: [{
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
    radio0: '0.2',
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

}


// 场景案例 
homeConfig.sceneCaseConfig = {
  title: "Case",
  caseLists: [
    {
      imgUrl: './static/images/home/sceneCase/case_image_01.png',
      desc: 'DI-star is'
    },
    {
      imgUrl: './static/images/home/sceneCase/case_image_02.png',
      desc: 'DI-dirve is'
    }
  ],

}

// 最新消息 
homeConfig.newsConfig = {
  title: "最新消息",
  // 左侧轮播图
  carouselLists: [
    {
      imgUrl: ('./static/images/home/news/news_image_01.png'),
      desc: '星际……'
    },
    {
      imgUrl: ('./static/images/home/news/news_image_02.png'),
      desc: '自动驾驶……'
    },
    {
      imgUrl: ('./static/images/home/news/news_image_03.png'),
      desc: '自动驾驶3……'
    }
  ],
  // 右侧新闻列表
  newLists: [
    {
      content: 'news01',
      time: "20210528"
    },
    {
      content: 'news02',
      time: "20210529"
    },
    {
      content: 'news03',
      time: "20210528"
    },
    {
      content: 'news04',
      time: "20210530"
    },
    {
      content: 'news05',
      time: "20210531"
    },
    {
      content: 'news06',
      time: "20210601"
    },
  ]
}

// 社区信息 
homeConfig.communityConfig = {
  title: "COMMUNITY",
  communityLists: [
    {
      title: 'Github',
      desc:
        'OpenDIlab github',
      link: 'https://www.baidu.com',
      linkText: '查看详情',
      icon: ('./static/images/home/community/GitHub.svg')
    },
    {
      title: 'Zhihu',
      desc:
        'OpenDIlab zhihu bbs',
      link: 'https://www.baidu.com',
      linkText: '查看详情',
      icon: ('./static/images/home/community/zhihu.svg')

    },
    {
      title: 'QQ Group',
      desc:
        'OpenDIlab QQ group',
      link: 'https://www.baidu.com',
      linkText: '查看详情',
      icon: ('./static/images/home/community/QQ.svg')
    }
  ]
}

// 教学视频 
homeConfig.teachingVideoConfig = {
  title: "教学视频",
  teachingVideoLists: [
    {
      videoLink: 'https://www.baidu.com',
    },
    {

      videoLink: 'https://map.baidu.com/@12688783,2562483,13z',
    },
    {
      videoLink: 'https://www.baidu.com',
    }
  ]
}


// Footer 
homeConfig.footerConfig = {
  footerInfoLists: [
    {
      title: 'Resources',
      items: [
        {
          itemTitle: 'Tutorials',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: 'API docs',
          link: 'https://www.baidu.com/'
        },
        // {
        //   itemTitle: '示例项目',
        //   link: 'https://www.baidu.com/'
        // }
      ]
    },
    {
      title: 'Links',
      items: [
        {
          itemTitle: 'DI-drive',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: 'DI-star',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: 'DI-zoo',
          link: 'https://www.baidu.com/'
        }
      ]
    },
    {
      title: 'Contact us',
      items: [
        {
          itemTitle: 'Github',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: 'Email',
          link: 'https://www.baidu.com/'
        },
        // {
        //   itemTitle: '联系我们01',
        //   link: 'https://www.baidu.com/'
        // }
      ]
    }
  ],
  qrcodeLists: [
    {
      imgUrl: ('./static/images/home/footer/qrcode_image_01.png')
    },
    {
      imgUrl: ('./static/images/home/footer/qrcode_image_02.png')
    }
  ]
}


