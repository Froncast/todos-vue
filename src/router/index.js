import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
Vue.use(VueRouter)

const routes = [{
		path: '',
		name: 'Home',
		component: Home
	},
	{
		path: '/task/:id',
		name: 'task',
		component: Task,
	},
	{
		path: '/page/:page',
		name: 'page',
		component: Home
	},
	{
		path: "*",
		component: Home
	}
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router