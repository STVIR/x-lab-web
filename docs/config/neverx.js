// HeaderMenu 
export const headerMenuConfig = {
  logoText: 'Neverx',
  menuLists: [
    {
      path: "/neverxInstallInfo",
      name: "安装",
      id: "neverxInstallInfo",
      isGoAnchor: true
    },
    { 
      isExternal:true,
      path: "https://www.baidu.com/",
      name: "文档",
    },
    {
      id: "neverxSourceCode",
      name: "源码",
      isExternal:true,
      path: "https://www.baidu.com/",
   
    },

  ]
}

// Banner 
export const bannerConfig = {
  bannerTextSmall: "NeverX is X-Lab Deep Reinforcement Learning Framework System，you can ……", // 小号
}

// 安装
export const installInfoConfig = {
  title: '安装',

  formConfig: [
    {
      label: 'Version',
      type: 'radioGroup',
      value:"",
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

// 算法
export const algorithmInfoConfig = {
  title: "算法",
  content: "open-xlab.pages.gitlab.bj.sensetime.com/cell/nerveX/guide/index.html"
}
