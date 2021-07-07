var xadConfig = {}
// DiStar
// HeaderMenu 
xadConfig.headerMenuConfig = {
  logoText: './static/logos/资源 22@4x.png',
  menuLists: [
    {
      path: "/installInfo",
      name: "INSTALLATION",
      id: "installInfo",
      isGoAnchor: true
    },
    {
      path: "/documentInfo",
      name: "DOCUMENTS",
      id: "documentInfo",
      isGoAnchor: true
    },
    {
      path: "/dataInfo",
      name: "EXAMPLE",
      id: "dataInfo",
      isGoAnchor: true
    },

    {
      id: "sourceCode",
      name: "SOURCE",
      isExternal: true,
      path: "https://www.baidu.com/",
    },

  ]
}


// 安装new
xadConfig.installInfoConfig = {
  title: 'INSTALLATION',
}
// Example

xadConfig.exampleConfig = {
  title:"EXAMPLE",
  desc:"We provide Multiple Tests with our Agents",
  lists:[
    {
      title:"1.   human vs agent",
    videoLink: './static/videos/star/human_vs_agent.mp4',

    },
    {
      title:"2.   agent_vs_agent",
        videoLink: './static/videos/star/agent_vs_agent.mp4',

    },
    {
      title:"3.   agent_vs_bot",
        videoLink: './static/videos/star/agent_vs_bot.mp4',
    },
  ]
}


// 文档
xadConfig.documentInfoConfig = {
  title: "文档",
  content: "open-xlab.pages.gitlab.bj.sensetime.com/cell/nerveX/guide/index.html"
}

// 数据 dataDetail: 数据详情介绍  dataFormat:数据格式 dataBenchmark:数据评测  dataDownload:数据下载
xadConfig.dataInfoConfig = {
  title: "数据",
  dataDetail: {
    title: "数据详情介绍",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sunt repudiandae earum animi itaque voluptatibus blanditiis! Quasi enim dolor vero consequatur consectetur. Vitae quia omnis natus voluptatem ratione dolor eaque.",
    // 需要展示的数据
    tableData: [
      {
        name: '路口前障碍物停车测试',
        picture: './static/images/xad/dataInfo/data_image_01.png',
        desc: 'test test',
      },
      {
        name: '路口中不overtake测试',
        picture: ('./static/images/xad/dataInfo/data_image_02.png'),
        desc: '路口中不overtake测试',
      },
    ],
    // 行列配置
    columns: [
      {
        prop: "name",
        label: "样例名称",
        width: "180",
      },
      {
        prop: "picture",
        label: "示例图片",
        width: "300",
        isPicture: true
      },
      {
        prop: "desc",
        label: "描述",
        width: "180",
      },
      {
        prop: "download",
        label: "下载",
        width: "180",
      },
    ]
  },

  dataFormat: {
    title: "数据格式",
    content: "Lorem ipsum dolor sit ame",

  },
  dataBenchmark: {
    title: "数据评测",
    // 需要展示的数据
    tableData: [
      {
        models: 'CLIS',
        successRate: '24%',
        noCrashRate: '24%',
      },
      {
        models: 'MME2E ef',
        successRate: '24%',
        noCrashRate: '24%',
      },
      {
        models: 'LBC',
        successRate: '24%',
        noCrashRate: '24%',
      },
    ],
    // 行列配置
    columns: [
      {
        prop: "models",
        label: "Models",
        width: "180",
      },
      {
        prop: "successRate",
        label: "Success Rate",
        width: "300",
      },
      {
        prop: "noCrashRate",
        label: "No crash rate",
        width: "180",
      },

    ]
  },

  dataDownload: {
    title: '数据下载',
    content: [
      {
        name: "downloadtest01.zip",
        link: "",  //此处需要填写实际需要下载的地址
      },
      {
        name: "downloadtest02.zip",
        link: "",  //此处需要填写实际需要下载的地址
      },
      {
        name: "downloadtest03.zip",
        link: "",  //此处需要填写实际需要下载的地址
      },
    ]
  }



}
