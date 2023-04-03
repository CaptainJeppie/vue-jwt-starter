import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import todolist from '../components/todolist/todolist.vue';
import createTodolist from '../components/todolist/createTodolist.vue';	
import editTodolist from '../components/todolist/editTodolist.vue';
import Login from '../components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/todolist', component: todolist },
    { path: '/login', component: Login },
    { path: '/createtodolist', component: createTodolist },
    { path: '/edittodolist/:id', component: editTodolist, props: true }
  ]
})

export default router
