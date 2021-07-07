<template>
  <div id="documentInfo" class="documentInfo">
    <el-row type="flex" justify="center">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 20 }"
        :xl="{ span: 20 }"
      >
        <h3 class="title">
          {{ documentInfoConfig.title }}
        </h3>
        <div class="documentInfo-content alogrithms">
          <!-- <p>{{ documentInfoConfig.content }}</p> -->
          <div
            class="item"
            v-for="(alogItem, alogindex) in alogrithms"
            :key="alogindex"
          >
            <h4 class="title">{{ alogItem.title }}</h4>
            <div class="content">
              <div
                class="listItem"
                v-for="(item, index) in alogItem.lists"
                :key="index"
              >
                <!-- <h4 class="desc"> -->
                <a :href="item.link" target="_blank">
                  {{ item.desc }}
                </a>
                <!-- </h4> -->
                <!-- <h4 class="title"></h4> -->
              </div>
            </div>
          </div>
        </div>

        <h3 class="title">
          {{ algorithmInfoConfig.title }}
        </h3>
        <div class="documentInfo-content environments">
          <!-- <p>{{ algorithmInfoConfig.content }}</p> -->
          <div
            class="item"
            v-for="(enItem, enindex) in environments"
            :key="enindex"
          >
            <h4 class="title">{{ enItem.title }}</h4>
            <div class="content">
              <div
                class="img"
                v-for="(item, index) in enItem.lists"
                :key="index"
              >
                <!-- <img :src="item.imgUrl" alt="" /> -->
                <video class="video-content" controls width="500" height="300">
                  <!-- :poster="video.vedeoImg" -->
                  <span>{{ item }}</span>
                  <!-- <source
                    src="//vjs.zencdn.net/v/oceans.webm"
                    type="video/webm" -->
                  <!-- /> -->
                  <source :src="item.videoLink" type="video/mp4" />
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <div class="desc">{{ item.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="documentInfo-content algorithmOverview">
          <h4 class="title">{{ algorithmOverview.title }}</h4>
          <!-- <pre class="content">
            <code>
               {{algorithmOverview.html}}
            </code>
          </pre> -->
          <el-table
            class="content"
            :data="tableData"
            border
            style="width: 100%"
          >
            <el-table-column
              v-for="(col, index) in column"
              :key="index"
              :prop="col.prop"
              :label="col.label"
              :width="col.width"
            >
            </el-table-column>
          </el-table>
        </div>
        <!-- </p> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documentInfoConfig: window.neverxConfig.documentInfoConfig,
      algorithmInfoConfig: window.neverxConfig.algorithmInfoConfig,
      algorithmOverview: window.neverxConfig.algorithmOverview,
      environments: window.neverxConfig.algorithmInfoConfig.environments,

      // 对应Supported Alogrithms
      alogrithms: [
        {
          title: 'Q-leaning',
          lists: [
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/dqn.html',
              desc: 'DQN'
            },
            {
              link:
                'https://opendilab.github.io/DI-engine/hands_on/c51_qrdqn_iqn.html#',
              desc: 'C51'
            },
            {
              link:
                'https://opendilab.github.io/DI-engine/hands_on/c51_qrdqn_iqn.html#qrdqn',
              desc: 'QRDQN'
            },
            {
              link:
                'https://opendilab.github.io/DI-engine/hands_on/c51_qrdqn_iqn.html#iqn',
              desc: 'IQN'
            },
            {
              link:
                'https://opendilab.github.io/DI-engine/hands_on/rainbow.html',
              desc: 'Rainbow'
            }
          ]
        },
        {
          title: 'Actor-critic',
          content: 'A2C、PPO、PPG',
          lists: [
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/a2c.html',
              desc: 'A2C'
            },
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/ppo.html',
              desc: 'PPO'
            },
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/ppg.html',
              desc: 'PPG'
            }
            // {
            //   link:
            //     'https://opendilab.github.io/DI-engine/hands_on/c51_qrdqn_iqn.html#iqn',
            //   desc: 'IQN'
            // },
            // {
            //   link:
            //     'https://opendilab.github.io/DI-engine/hands_on/rainbow.html',
            //   desc: 'Rainbow'
            // }
          ]
        },
        {
          title: 'Multi agent',
          content: 'Qmix、Colla-q、Coma',
          lists: [
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/qmix.html',
              desc: 'Qmix'
            },
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/collaq.html',
              desc: 'Colla-q'
            },
            {
              link: 'https://opendilab.github.io/DI-engine/hands_on/coma.html',
              desc: 'Coma'
            }
          ]
        }
      ],

      column: [
        {
          prop: 'Type',
          label: '',
          width: 'auto'
        },
        {
          prop: 'EnvSteps',
          label: ' Env Steps',
          width: 'auto'
        },
        {
          prop: 'Ours',
          label: 'Ours',
          width: 'auto'
        },
        {
          prop: 'Tianshou',
          label: 'Tianshou',
          width: 'auto'
        },
        {
          prop: 'Rllib',
          label: 'Rllib',
          width: 'auto'
        },
        {
          prop: 'Sb3',
          label: 'Sb3',
          width: 'auto'
        }
      ],

      tableData: [
        {
          Type: 'Pong',
          EnvSteps: '10M',
          Ours: '20',
          Tianshou: '20',
          Rllib: 'n/a',
          Sb3: '20'
        },
        {
          Type: 'Qbert',
          EnvSteps: '10M',
          Ours: '17866',
          Tianshou: '7307',
          Rllib: '7968',
          Sb3: '9496'
        },
        {
          Type: 'Space Invaders',
          EnvSteps: '10M',
          Ours: '1880',
          Tianshou: '812',
          Rllib: '1001',
          Sb3: '622'
        }
      ]

      // 对应 Supported Environments
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
};
</script>

<style lang="scss" scoped>
.documentInfo {
  box-shadow: 0 2px 12px 0 #dddddd;
  padding: 50px 64px;
  .title {
    text-align: left;
    font-size: 32px;
  }
  .documentInfo-content {
    // color: #0000ff;
    text-align: left;
    text-indent: 38px;
    padding: 2px 0;
    .title {
      margin: 0;
      font-size: 28px;
    }

    &.alogrithms {
      .content {
        display: flex;
        padding-left: 80px;
        line-height: 38px;
        .listItem {
          color: #0000ff;
          text-align: left;
        }
      }
    }

    &.algorithmOverview {
      .content {
        text-align: left;
        margin-top: 20px;
      }
    }
    &.environments {
      .content {
        display: flex;
      }
      img {
        width: 240px;
        height: 158px;
        margin-top: 16px;
      }

      .desc {
        font-size: 14px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
</style>

<style lang="scss">
.video-content {
  width: 240px;
  height: 158px;
  object-fit: fill;
}
</style>
