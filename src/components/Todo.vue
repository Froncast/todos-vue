<template>
  <section class="todo">
    <div class="container">
      <div class="todo-wrapper">
        <div class="todo-header">
          <h2 class="todo__title">Список задач</h2>
          <button class="todo__sort" @click="tasksSortByDate">
            <img class="sort sort-img sort--asc" width="20"  height="20" src="https://www.flaticon.com/svg/static/icons/svg/475/475288.svg">
          </button>
        </div>
        <div class="todo-add-task">
          <input v-model="title"
                 @keyup.enter="addTask" type="text" class="todo-add-task__input" placeholder="Новая задача">
          <button @click="addTask" class="todo-add-task__btn">Добавить</button>
        </div>
        <TasksList :tasks="TASKS" v-if="!loading"/>
        <Preloader v-if="loading"/>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapGetters} from 'vuex'
  import TasksList from "./TasksList";
  import Preloader from "./Preloader";

export default {
  data() {
    return {
      title: '',
    }
  },
  computed: {
    ...mapGetters(['TASKS']),
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    tasksSortByDate() {
      this.$store.dispatch('SORT_TASK_BY_DATE')
    },
    addTask() {
      const task = {
        title: this.title,
        status: false,
        createdAt: +new Date()
      }
      this.title = ''
      this.$store.dispatch('SAVE_TASK', task)
      if(this.$route.params["page"] && parseInt(this.$route.params["page"]) !== 1) {
        this.$router.push('/page/1')
      }
    }
  },
  mounted() {
    this.$store.dispatch('GET_TASKS')
  },
  components: {
    TasksList,
    Preloader
  }
};
</script>

<style scoped>
  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .todo__title {
    font-size: 20px;
  }

  .todo__sort {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  .todo-add-task {
    position: relative;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .todo-add-task__input {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-left: 33px;
    padding-right: 120px;
    border: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
  }

  .todo-add-task__btn {
    position: absolute;
    right: 0;
    top: 0;
    min-width: 100px;
    max-width: 100px;
    height: 100%;
    border: none;
    background: #3AA0DA;
    color: #ffffff;
    cursor: pointer;
  }
</style>
