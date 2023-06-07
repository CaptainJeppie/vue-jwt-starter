<template>
  <section>
    <div class="container">

      <h2 class="mt-3 mt-lg-5">Tasks</h2>
      <button type="button" class="btn btn-primary mt-3" @click="this.$router.push('/createTask');"> Create Task </button>
      <div class="row mt-3">
        <TodolistItem v-for="task in Tasks" :key="task.id" :task="task" @update="update" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";

import todolistItem from "./todolistItem.vue";

export default {
  name: "TodoList",
  components: {
    TodolistItem: todolistItem,
  },
  data() {
    return {
      Tasks: [],
    };
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      if (localStorage.getItem('jwt') != null) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
      }
      axios
        .get("todolist?username=" + localStorage.getItem('username'))
        .then((result) => {
          console.log(result);
          this.Tasks = result.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped></style>