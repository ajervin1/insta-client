import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import store from './store'
import VueObserveVisibility from 'vue-observe-visibility'
import Home from './views/Home'
import Test from './views/Test'

Vue.use(Router)
Vue.use(VueObserveVisibility)

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/test',
			component: Test
		}
	]
})


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
