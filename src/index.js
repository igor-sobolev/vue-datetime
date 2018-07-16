import Datetime from './Datetime.vue'
import DomPortal from 'vue-dom-portal'

function plugin (Vue) {
  Vue.component('datetime', Datetime)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
  window.Vue.use(DomPortal) // portal popup to document.body
}

export default plugin
const version = '__VERSION__'

// Export all components too
export {
  Datetime,
  version
}
