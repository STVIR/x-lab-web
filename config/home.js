var homeConfig = {}
// HeaderMenu 
homeConfig.headerMenuConfig = {
  logoText: './static/logos/资源 26@4x.png',
  menuLists: [
    {
      isExternal: true,
      path: "https://opendilab.github.io/DI-engine/index.html",
      name: "Get Started",
    },
    {
      isExternal: true,
      path: "https://opendilab.github.io/DI-engine/",
      name: "Docs",
    },
    {
      path: "/dizoo",
      // id: "teachingVideo",
      name: "DI-zoo",
      // isGoAnchor: true
    },
    {
      path: "/case",
      name: "DI-X",
      redirect: "/case/diDrive",
      children: [
        {
          path: "/diDrive",
          name: "DI-drive"
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
      name: "Community",
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
  bannerText: "Welcome to the Decision AI", // 正常
  bannerTextSmall: "", // 小号
}


// 核心能力 
homeConfig.coreAbilityConfig = {
  title: "KEY FEATURES",
  coreAbilityLists: [
    {
      title: 'Algorithm Family',
      desc:
        'Various decision AI algorithm: DeepRL family, inverse RL family, MARL family, MCTS family and etc.',
    },
    {
      title: 'Large Scale DRL',
      desc:
        '1000+CPU & 10000+GPU distributed self-play training system and several demostrations.',
    },
    {
      title: 'Decision AI + System',
      desc:
        'Decision AI specific system designs, stable micro service support and high throughput efficiency optimization.',
    },
    {
      title: 'Customized Design',
      desc:
        'Unified various novel ideas and implementation forms. Prepare for Mix-AI era.'
    },


  ]
}

// 安装
homeConfig.installInfoConfig = {
  title: 'INSTALLATION',
  desc: 'Select your preferences and run the install command. Please ensure that you have met the prerequisites below (e.g., PyTorch), depending on your package manager. Anaconda is our recommended package manager since it installs all dependencies. ',
  formConfig: [{
      label: 'DI-engine Build',
      type: 'radioGroup',
      value: "",
      radioList: [
        // {
        //   label: '0.1',
        //   value: '0.1'
        // },
        {
          label: '0.1.0',
          value: '0.1.0(beta)'
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
      label: 'Your OS',
      type: 'radioGroup',
      radioList: [{
          label: 'Linux',
          value: 'Linux'
        },
        {
          label: 'Windows',
          value: 'Windows'
        },
        {
           label: 'Mac',
           value: 'Mac'
        }
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
          label: 'Conda',
          value: 'Conda'
        },
        {
          label: 'Source',
          value: 'Source'
        }
      ]
    },
    {
      label: 'Run this cmd:',
      type: 'cmd',
      value: `Run this cmd:`
    }
  ],
  valueObj: {
    radio0: '0.1.0',
    radio1: 'Linux',
    radio2: 'Pip'
  },
  cmdObj: {
    "0.1.0LinuxPip": "pip install DI-engine",
    "0.1.0LinuxConda": "conda-c conda-forge install DI-engine",
    "0.1.0LinuxSource": "git clone https://github.com/opendilab/DI-engine && cd DI-engine && pip install . --user",
    "0.1.0WindowsPip": "pip install DI-engine",
    "0.1.0WindowsConda": "conda-c conda-forge install DI-engine",
    "0.1.0WindowsSource": "git clone https://github.com/opendilab/DI-engine && cd DI-engine && pip install . --user",
    "0.1.0MacPip": "pip install DI-engine",
    "0.1.0MacConda": "conda-c conda-forge install DI-engine", 
    "0.1.0MacSource": "git clone https://github.com/opendilab/DI-engine && cd DI-engine && pip install . --user",
  },

}


// 场景案例 
homeConfig.sceneCaseConfig = {
  title: "DI-X",
  caseLists: [
    {
      imgUrl: './static/images/home/sceneCase/case_image_03.png',
      desc: 'DI-Star is a large-scale distributed training framework based on OpenDILab. It is designed for training AI in extremely complex games like StarCraftII.'
    },
    {
      imgUrl: './static/images/home/sceneCase/case_image_04.png',
      desc: 'DI-drive is a Deep Learning platform for Autonomous Driving simulation. DI-drive develops driving policy with DI-engine and mainly uses Carla simulator.'
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
        'DI-engine github',
      link: 'https://github.com/opendilab/DI-engine',
      linkText: '查看详情',
      icon: ('./static/images/home/community/GitHub.svg')
    },
    {
      title: 'Zhihu',
      desc:
        'OpenDILab zhihu',
      link: 'http://www.zhihu.com/people/opendilab',
      linkText: '查看详情',
      icon: ('./static/images/home/community/zhihu.svg')

    },
    {
      title: 'QQ Group',
      desc:
        'OpenDILab QQ group',
      link: 'https://www.baidu.com',
      linkText: '查看详情',
      icon: ('./static/images/home/community/QQ.svg')
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
          itemTitle: 'Quick Start',
          link: 'https://opendilab.github.io/DI-engine/quick_start/index.html'
        },
        {
          itemTitle: 'Key Concept',
          link: 'https://opendilab.github.io/DI-engine/key_concept/index.html'
        },
        {
          itemTitle: 'Hands on RL',
          link: 'https://opendilab.github.io/DI-engine/hands_on/index.html'
        },
        // {
        //   itemTitle: '示例项目',
        //   link: 'https://www.baidu.com/'
        // }
      ]
    },
    {
      title: 'Codebases',
      items: [
        {
          itemTitle: 'DI-drive',
          link: 'https://github.com/opendilab/DI-drive'
        },
        {
          itemTitle: 'DI-star',
          link: 'https://github.com/opendilab/DI-star'
        },
        {
          itemTitle: 'DI-zoo',
          link: 'https://github.com/opendilab/DI-engine/tree/mastere/dizoo'
        }
      ]
    },
    {
      title: 'Contact us',
      items: [
        {
          itemTitle: 'Github',
          link: 'https://github.com/opendilab'
        },
        {
          itemTitle: 'Email',
          link: 'opendilab.contact@gmail.com'
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


