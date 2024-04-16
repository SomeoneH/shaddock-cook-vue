import 'amfe-flexible';
import './assets/css/common.css'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import './assets/js/iconfont.js'
import 'vant/lib/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button, Icon, Search, Swipe, SwipeItem, Form, Field, CellGroup, Divider, Toast } from 'vant';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
  .use(Button)
  .use(Icon)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Form)
  .use(Field)
  .use(CellGroup)
  .use(Divider)
  .use(Toast)

app.mount('#app')
