import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
	firestorePlugin
} from 'vuefire'
// import firebase from "firebase";
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
	created() {
		// firebase
		// 	.initializeApp({
		// 		apiKey: "AIzaSyCCovWx8UsriDTkYMsEIkdaKU_lWR0kPAE",
		// 		authDomain: "todo-vue-7d916.firebaseapp.com",
		// 		databaseURL: "https://todo-vue-7d916.firebaseio.com",
		// 		projectId: "todo-vue-7d916",
		// 		storageBucket: "todo-vue-7d916.appspot.com",
		// 		messagingSenderId: "646482519820",
		// 		appId: "1:646482519820:web:65452002b18b3da9eb0b29",
		// 		measurementId: "G-LKX79RVVFD"
		// 	})
		// 	.firestore()
		
		this.$store.dispatch("GET_TASKS")
	}
}).$mount('#app')