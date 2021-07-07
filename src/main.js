import { createApp } from 'vue'
import 'normalize.css/normalize.css'

import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'

// import javascript from 'highlight.js/lib/languages/javascript'
// import json from 'highlight.js/lib/languages/json.js'
// import 'highlight.js/styles/default.css'
// import VueHighlightJS from 'vue-highlight.js'


import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css

// Vue.use(VueHighlightJS, {
//     // Register only languages that you want
//     languages: {
//       javascript,
//       json
//     }
//   })

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
