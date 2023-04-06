<template>
    <div class="container">
        <h1>Create Task</h1>
        <form>
            <div class="form-group">
                <label for="taskName">Task Name</label><br>
                <input type="text" id="taskName" placeholder="Enter Task Name" v-model="task.name" required>
            </div>
            <div class="form-group">
                <label for="taskDescription">Task Description</label><br>
                <input type="text" id="taskDescription" placeholder="Enter Task Description" v-model="task.description"
                    required>
            </div>
            <div>
                <label for="taskPriority">Task Priority</label><br>
                <input type="radio" id="taskPriority" name="taskPriority" value="Low" v-model="task.priority">
                <label for="taskPriority">Low</label><br>
                <input type="radio" id="taskPriority" name="taskPriority" value="Medium" v-model="task.priority">
                <label for="taskPriority">Medium</label><br>
                <input type="radio" id="taskPriority" name="taskPriority" value="High" v-model="task.priority">
                <label for="taskPriority">High</label><br>
            </div>
            <div class="form-group">
                <label for="taskDueDate">Task Due Date</label><br>
                <input type="date" id="taskDueDate" v-model="task.dueDate" required>
            </div>
            <div class="form-group">
                <label for="taskStatus">Task Status</label><br>
                <select id="taskStatus" v-model="task.status" required>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" @click="CreateTask()">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "../../axios-auth";

export default {
    name: "CreateTodolist",
    data() {
        return {
            task: {
                name: "",
                description: "",
                priority: "Low",
                dueDate: "",
                status: "Not Started",
            },
        };
    },
    methods: {
        CreateTask() {
            axios.post('/todolist', this.task)
                .then((result) => {
                    console.log(result);
                })
                .catch((error) => console.log(error));
                this.$router.push('/todolist');
        },
    }
};
</script>

<style lang="scss" scoped>
</style>