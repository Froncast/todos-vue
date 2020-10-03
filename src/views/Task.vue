<template>
  <div>
  <Header/>
    <div class="container">
      <h2 class="page-title">Редактировать задачу</h2>
      <div v-if="!loading">
        <div>{{setData(taskById)}}</div>
        <p class="date">Дата и время добавления: {{formatDate(taskById.createdAt)}}</p>
        <div class="todo-edit-task form">
          <div class="form-group">
            <label for="task-title">Название</label>
            <input id="task-title" type="text" class="form-control" v-model="task.title" @keyup.enter.prevent="updateTask()">
          </div>
          <div class="form-buttons">
            <button class="todo__btn--save" @click.prevent="updateTask()">Сохранить</button>
            <button class="todo__btn--canceling" @click.prevent="getBack()">Отмена</button>
          </div>
        </div>
      </div>
      <Preloader v-if="loading"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Preloader from "../components/Preloader";


export default {
  name: "Task",
  data() {
    return {
      id: this.$route.params['id'],
      task: null
    };
  },
  methods: {
    setData(task) {
      this.task = task
    },
    formatDate(date) {
      return new Date(date).toLocaleString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
    },
    getBack() {
      this.$router.back()
    },
    updateTask() {
      const task = {
        id: this.task.id,
        title: this.task.title
      }
      this.$store.dispatch('TOGGLE_TITLE_TASK', task)
    }
  },
  computed: {
    taskById() {
      const id = this.id
      return this.$store.getters.GET_TASK_BY_ID(id)
    },
    loading () {
      return this.$store.getters.loading
    },
  },
  components: {
    Header,
    Preloader
  }
};
</script>

<style scoped>
  .page-title {
    margin-bottom: 30px;
  }

  .date{
    margin-bottom: 30px;
  }

  .form {
    font-size: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  label {
    margin-bottom: .5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .form-buttons{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  button {
    display: inline-block;
    margin-left: 20px;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    color: #ffffff;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    cursor: pointer;
  }

  .todo__btn--save {
    background: #28a745;
  }

  .todo__btn--save:hover{
    background: #218838;
  }

  .todo__btn--canceling {
    background: #0062cc;
  }

  .todo__btn--canceling:hover {
    background: #0069d9;
  }
</style>