var home = {}
// HeaderMenu 
home.headerMenuConfig = {
  logoText: '1111',
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
      redirect: "/case/xad",
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

// Banner 
home.bannerConfig = {
  bannerText: "From research to production？", // 正常
  bannerTextSmall: "NeverX is X-Lab Deep Reinforcement Learning Framework System，……", // 小号
}

// 核心能力 
home.coreAbilityConfig = {
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

// 场景案例 
home.sceneCaseConfig = {
  title: "场景案例",
  caseLists: [
    {
      imgUrl: './static/images/home/sceneCase/case_image_01.png',
      desc: '星际……'
    },
    {
      imgUrl: './static/images/home/sceneCase/case_image_02.png',
      desc: '自动驾驶……'
    }
  ],

}

// 最新消息 
home.newsConfig = {
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
home.communityConfig = {
  title: "社区信息",
  communityLists: [
    {
      title: '技术沙龙',
      desc:
        '对游戏玩家来说，无论是团队FPS、MOBA竞技还是生存类游戏，稳定、低延迟是获胜的关键。',
      link: 'https://www.baidu.com',
      linkText: '查看详情'
    },
    {
      title: 'GitHub社区',
      desc:
        '对游戏玩家来说，无论是团队FPS、MOBA竞技还是生存类游戏，稳定、低延迟是获胜的关键。',
      link: 'https://www.baidu.com',
      linkText: '查看详情'

    },
    {
      title: '比赛……',
      desc:
        '对游戏玩家来说，无论是团队FPS、MOBA竞技还是生存类游戏，稳定、低延迟是获胜的关键。',
      link: 'https://www.baidu.com',
      linkText: '查看详情'

    }
  ]
}

// 教学视频 
home.teachingVideoConfig = {
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
home.footerConfig = {
  footerInfoLists: [
    {
      title: '相关资源',
      items: [
        {
          itemTitle: '文档',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: '教程',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: '示例项目',
          link: 'https://www.baidu.com/'
        }
      ]
    },
    {
      title: '友情链接',
      items: [
        {
          itemTitle: '商汤科技01',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: '友情链接01',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: '友情链接02',
          link: 'https://www.baidu.com/'
        }
      ]
    },
    {
      title: '联系我们',
      items: [
        {
          itemTitle: '源码',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: '邮箱',
          link: 'https://www.baidu.com/'
        },
        {
          itemTitle: '联系我们01',
          link: 'https://www.baidu.com/'
        }
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

window['homeConfig'] = home

console.log('home111111111111111', home);