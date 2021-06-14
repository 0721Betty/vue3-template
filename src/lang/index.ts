import { createI18n } from 'vue-i18n'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'
import enLocale from 'element-plus/lib/locale/lang/en'

const messages = {
  zh: {
    el: zhLocale.el,
  },
  en: {
    el: enLocale.el,
  },
}

const langFileKeys = ['common']

langFileKeys.forEach((key) => {
  // eslint-disable-next-line
  const langValue = require(`./${key}`).default
  Object.keys(langValue).forEach((k) => {
    const { zh, en } = langValue[k]
    Object.assign(messages['zh'], { [key]: { [k]: zh } })
    Object.assign(messages['en'], { [key]: { [k]: en } })
  })
})

const i18n = createI18n({
  locale: 'zh',
  messages,
})

export default i18n
