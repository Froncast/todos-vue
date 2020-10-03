<template>
    <div>
        <ul class="todo-list">
            <router-link
                    tag="li"
                    v-for="task in paginatedTasks"
                    :to="'/task/' + task.id"
                    class="todo-item"
                    :class="{'todo-item--completed' : task.status}"
                    :key="task.id"
            >
                <a class="todo-item__link">{{ task.title }}</a>
                <div class="todo-buttons">
                    <button class="todo__btn" @click="toggleStatus(task.id, task.status)">
                        <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/20/20758.svg">
                    </button>
                    <button class="todo__btn" @click="deleteTask(task.id)">
                        <img width="20" height="20" src="https://www.flaticon.com/svg/static/icons/svg/2087/2087868.svg">
                    </button>
                </div>
            </router-link>
        </ul>
        <Pagination :current-page="currentPage" :total="tasks.length"/>
    </div>
</template>

<script>
    import Pagination from "./Pagination";
    export default {
        data() {
            return {
                currentPage: (!this.$route.params['page']) ? 1 : parseInt(this.$route.params['page']) || 1,
                tasksPerPages: 10,
            }
        },
        props: {
            tasks: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        methods: {
            toggleStatus(id, status) {
                const data = {
                    id, status
                }
              this.$store.dispatch('TOGGLE_STATUS_TASK', data)
            },
            deleteTask(id) {
                this.$store.dispatch('DELETE_TASK', id)
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            },
            paginatedTasks() {
                const from = (this.currentPage - 1) * this.tasksPerPages
                const to = from + this.tasksPerPages
                return this.tasks.slice(from, to)
            },
        },
        watch: {
            $route(toR) {
                this.currentPage = (!toR.params['page']) ? 1 : parseInt(toR.params['page']) || 1
            }
        },
        components: {
            Pagination,
        }
    }
</script>

<style scoped>
    .todo-list {
        list-style: none;
        margin-bottom: 30px;
    }

    .todo-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        min-height: 50px;
        padding: 10px 20px;
        background: #ffffff;
        border-radius: 4px;
        transition: filter .3s;
    }

    .todo-item:hover {
        filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
    }

    .todo-item__link {
        color: #3F3F3F;
        text-decoration: none;
        margin-right: 20px;
        transition: color .3s;
    }

    .todo-item__link:hover {
        text-decoration: underline;
    }

    .todo-item--completed {
        transition: background .3s;
        background: #3ADA7A;
    }

    .todo-item--completed .todo-item__link {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: line-through;
    }

    .todo-buttons {
        flex-shrink: 0;
    }

    .todo__btn {
        width: 30px;
        height: 30px;
        background: transparent;
        border: none;
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 0.3s;
    }

    .todo__btn:hover {
        opacity: 1;
    }
</style>