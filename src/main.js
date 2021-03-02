import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)


Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
