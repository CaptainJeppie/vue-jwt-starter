<template>
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xxl-4 p-2">
        <div class="card task-card h-200">
            <div class="card-header">
                <h2>{{ task.name }}</h2>
            </div>
            <div class="card-body">
                <div class="float-start">
                    <h5>{{ task.description }}</h5><br>
                    <h6>Priority : {{ task.priority }}</h6>
                    <h6>Status : {{ task.status }}</h6>
                    <h6>Due Date : {{ task.dueDate }}</h6>
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-warning" @click="editTask(task.id)">Edit</button>&nbsp;&nbsp;
                <button class="btn btn-danger" @click="deleteTask(task.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
    name: "TodolistItem",
    props: {
        task: Object,
    },
    methods: {
        deleteTask(id) {
            if (localStorage.getItem('jwt') != null) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
            }
            axios
                .delete("todolist/" + id)
                .then((result) => {
                    console.log(result);
                    this.$emit('update')
                })
                .catch((error) => console.log(error));
        },
        editTask(id) {
            this.$router.push('/edittask/' + id);
        }
    },
}
</script>

<style lang="scss">
body {
    background-color: #EDE6E6;
}

.card-header {
    background-color: rgb(196, 160, 114);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #ffffff;
}

.card-body {
    background-color: rgb(228, 206, 177);
}

.card-footer {
    background-color: rgb(196, 160, 114);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #ffffff;
}</style>