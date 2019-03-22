import vuexlsx from './js-xlsx'

export default {
  install (Vue) {
    Vue.prototype.$xlsx = new Vue(vuexlsx)
  }
}
