import Datetime from './Datetime.vue'
import DomPortal from 'vue-dom-portal'

function plugin (Vue) {
  Vue.component('datetime', Datetime)
  Vue.component('v-dom-portal', DomPortal)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

// Export all components too
export {
  Datetime,
  version
}
