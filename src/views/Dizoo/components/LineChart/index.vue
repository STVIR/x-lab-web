<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts';
// require('echarts/theme/macarons.js') // echarts theme
import resize from '../mixins/resize.js';

export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '344px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  // const fileReader = new FileReader();
  //     fileReader.readAsText(file);


    //   fileReader.onload = function() {
    //     console.log(this.result);
    //  })

  

  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      // this.chart = echarts.init(this.$el, 'macarons')
      console.log("echarts",echarts);
      this.chart = echarts.init(this.$el);
      this.setOptions(this.chartData);
    },

    setOptions({
      A2CData,
      C51Data,
      DQNData,
      IQNData,
      PPGData,
      PPOData,
      QRDQNData,
      RAINBOWData,
      xAxisDa
    } = {}) {
      this.chart.setOption({
        xAxis: {
          data: xAxisDa,
          inverse: true,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          nameLocation: 'start'
        },
        grid: {
          left: 10,
          right: 50,
          bottom: 50,
          top: 60,
          containLabel: true
        },
        dataZoom: [
          {
            show: false,
            realtime: true,
            // start: 65,
            // end: 85,
            bottom: '60'
          },
          {
            type: 'inside',
            realtime: true,
            // start: 65,
            // end: 85,
            bottom: '60'
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          top: 0,
          right: '48%',
          data: ['模型', '部署', '评测', '发布'],
          icon: 'circle',
          itemHeight: 6, // 修改icon图形大小
          textStyle: {
            fontSize: 14,
            color: '#212F36'
          }
        },
        series: [
          {
            name: 'A2C',
            itemStyle: {
              normal: {
                color: '#000000',
                lineStyle: {
                  color: '#000000',
                  width: 2
                }
                // areaStyle: {
                //   color: '#f6b1b2'
                // }
              }
            },
            smooth: true,
            type: 'line',
            data: A2CData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'C51',
            itemStyle: {
              normal: {
                color: '#E88967',
                lineStyle: {
                  color: '#E88967',
                  width: 2
                }
                // areaStyle: {
                //   color: '#b6ddfe'
                // }
              }
            },
            smooth: true,
            type: 'line',
            data: C51Data,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'DQN',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#705CA0',
                lineStyle: {
                  color: '#705CA0',
                  width: 2
                }
                // areaStyle: {
                //   color: '#bfedcf'
                // }
              }
            },
            data: DQNData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          },
          {
            name: 'IQN',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0AABA9',
                lineStyle: {
                  color: '#0AABA9',
                  width: 2
                }
                // areaStyle: {
                //   color: '#94dddc'
                // }
              }
            },
            data: IQNData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
            //  animation:false
          },
          {
            name: 'PPGD',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0AABA9',
                lineStyle: {
                  color: '#0AABA9',
                  width: 2
                }
                // areaStyle: {
                //   color: '#94dddc'
                // }
              }
            },
            data: PPGData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
            //  animation:false
          },
          {
            name: 'PPOD',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0AABA9',
                lineStyle: {
                  color: '#0AABA9',
                  width: 2
                }
                // areaStyle: {
                //   color: '#94dddc'
                // }
              }
            },
            data: PPOData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
            //  animation:false
          },
          {
            name: 'QRDQND',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0AABA9',
                lineStyle: {
                  color: '#0AABA9',
                  width: 2
                }
                // areaStyle: {
                //   color: '#94dddc'
                // }
              }
            },
            data: QRDQNData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
            //  animation:false
          },
          {
            name: 'RAINBOWD',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#0AABA9',
                lineStyle: {
                  color: '#0AABA9',
                  width: 2
                }
                // areaStyle: {
                //   color: '#94dddc'
                // }
              }
            },
            data: RAINBOWData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
            //  animation:false
          }
        ]
      });
    }
  }
};
</script>
