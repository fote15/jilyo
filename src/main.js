import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';




// Import Bootstrap an BootstrapVue CSS files (order is important)


import { vfmPlugin } from 'vue-final-modal'

Vue.use(vfmPlugin)


// Prefered: as a plugin (directive + filter) + custom placeholders support
import VueMask from 'v-mask'
Vue.use(VueMask);



// Or as a directive-only
import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

// Or only as a filter-only
import { VueMaskFilter } from 'v-mask'
Vue.filter('VMask', VueMaskFilter)




import PrettyCheckbox from 'pretty-checkbox-vue';

Vue.use(PrettyCheckbox);
import PrettyInput from 'pretty-checkbox-vue/input';
import PrettyCheck from 'pretty-checkbox-vue/check';
import PrettyRadio from 'pretty-checkbox-vue/radio';

Vue.component('p-input', PrettyInput);
Vue.component('p-check', PrettyCheck);
Vue.component('p-radio', PrettyRadio);




import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)







import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')