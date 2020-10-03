<template>
  <div>
    <Header />
    <Todo />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Todo from "@/components/Todo.vue";

export default {
  name: "Home",
  components: {
    Header,
    Todo,
  },
};
</script>
