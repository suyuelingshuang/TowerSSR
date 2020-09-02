import Vue from 'vue'
import ElementUI from 'element-ui'
import {createRouter} from './router'
import {createStore} from './store'
import {sync} from 'vuex-router-sync'

import App from './app.vue'

Vue.use(ElementUI)

// 实例 每次请求都会创建新的实例

export function createApp(context){

  const router = createRouter()
  const store = createStore()
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { router, app }

}