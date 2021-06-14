import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { elComponents, elPlugins } from '@/plugins/element'
import ElementLocale from 'element-plus/lib/locale'
import i18n from '@/lang'

import 'element-plus/packages/theme-chalk/src/base.scss'
import '@/assets/scss/element-variables.scss'

const app = createApp(App)

// element
elComponents.forEach((component) => {
  app.component(component.name, component)
})
elPlugins.forEach((plugin) => {
  app.use(plugin)
})

// i18n
ElementLocale.i18n(i18n.global.t)

app.use(store).use(router).use(i18n).mount('#app')
