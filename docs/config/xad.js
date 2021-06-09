var xadConfig={}
// HeaderMenu 
 xadConfig.headerMenuConfig = {
  logoText: 'XAD',
  menuLists: [
    {
      path: "/installInfo",
      name: "安装",
      id: "installInfo",
      isGoAnchor: true
    },
    {
      path: "/documentInfo",
      name: "文档",
      id: "documentInfo",
      isGoAnchor: true
    },
    {
      path: "/dataInfo",
      name: "数据",
      id: "dataInfo",
      isGoAnchor: true
    },

    {
      id: "sourceCode",
      name: "源码",
      isExternal:true,
      path: "https://www.baidu.com/",
    },

  ]
}

// 安装
 xadConfig.installInfoConfig = {
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
