import Vue from 'vue'
import Vuex from 'vuex'
import {
	vuexfireMutations,
} from 'vuexfire'
import tasks from './modules/tasks'
import shared from './modules/shared'

Vue.use(Vuex)

export default new Vuex.Store({
	mutations: vuexfireMutations,
	modules: {
		tasks,
		shared
	}
})