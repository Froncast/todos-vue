import {db} from "../../db";

export default {
	state: {
		tasks: [],
	},
	mutations: {
		SET_TASKS: (state, tasks) => {
			state.tasks = tasks.sort((a, b) => a.createdAt - b.createdAt)
		},
		ADD_TASK: (state, payload) => {
			state.tasks.push(payload)
		},
		DEL_TASK: (state, payload) => {
			const index = state.tasks.findIndex(task => task.id === payload)
			state.tasks.splice(index, 1)
		},
		SORT_TASK_BY_DATE: (state) => {
			state.tasks = state.tasks.reverse()
		},
		TOGGLE_STATUS_TASK: (state, payload) => {
			const index = state.tasks.findIndex(task => task.id === payload)
			state.tasks[index].status = !state.tasks[index].status
		},
		TOGGLE_TITLE_TASK: (state, payload) => {
			const index = state.tasks.findIndex(task => task.id === payload.id)
			console.log(`1`, state.tasks[index].title)
			console.log(`payload`, payload.title)
			state.tasks[index].title = payload.title
			console.log(`2`, state.tasks[index].title)
			console.log(`payload`, payload.title)
		}
	},
	actions: {
		GET_TASKS: async ({commit}) => {
			commit('clearError')
			commit('setLoading', true)
			
			try {
				const tasks = [];
				const query = await db.collection('tasks').get()
				
				query.forEach((doc) => {
					tasks.push({id: doc.id, ...doc.data()})
				});
				
				commit('SET_TASKS', tasks)
				commit('setLoading', false)
			} catch (error) {
					commit('setError', error.message)
					commit('setLoading', false)
					throw error
			}
			
		},
		SAVE_TASK: async ({commit}, payload) => {
			commit('clearError')
			commit('setLoading', true)
			
			try {
				const task = await db.collection('tasks').add(payload)
				payload.id = task.id
				
				commit('ADD_TASK', payload)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		},
		DELETE_TASK: async ({commit}, payload) => {
			commit('clearError')
			commit('setLoading', true)
			
			try {
				await db.collection('tasks').doc(payload).delete()
				commit('DEL_TASK', payload)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
			
		},
		SORT_TASK_BY_DATE: ({commit}) => {
			commit('SORT_TASK_BY_DATE')
		},
		TOGGLE_STATUS_TASK: async ({commit}, payload) => {
			commit('clearError')
			commit('setLoading', true)
			
			try {
				await db.collection('tasks').doc(payload.id).update({status: !payload.status})
				commit('TOGGLE_STATUS_TASK', payload.id)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
			
		},
		TOGGLE_TITLE_TASK: async ({commit}, payload) => {
			commit('clearError')
			commit('setLoading', true)
			
			try {
				await db.collection('tasks').doc(payload.id).update({title: payload.title})
				commit('TOGGLE_TITLE_TASK', payload)
				commit('setLoading', false)
			} catch (error) {
				commit('setError', error.message)
				commit('setLoading', false)
				throw error
			}
		}
	},
	getters: {
		TASKS(state) {
			return state.tasks
		},
		GET_TASK_BY_ID(state) {
			return adId => {
				return state.tasks.find(ad => ad.id === adId)
			}
		}
	}
}