import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import todolist from '../components/todolist/todolist.vue';
import createTask from '../components/todolist/createTask.vue';	
import editTask from '../components/todolist/editTask.vue';
import Login from '../components/Login.vue';
import register from '../components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/todolist', component: todolist },
    { path: '/login', component: Login },
    { path: '/register', component: register},
    { path: '/createTask', component: createTask },
    { path: '/edittask/:id', component: editTask, props: true }
  ]
})

export default router
