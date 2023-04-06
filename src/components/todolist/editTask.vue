<template>
    <div class="container">
        <h1>Edit Task</h1>
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
            <button type="submit" class="btn btn-primary" @click="updateTask()">Save Changes</button>
            <button type="submit" class="btn btn-danger" @click="this.$router.push('/todolist')">Cancel</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "EditTask",
    props: {
        id: Number,
    },
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
        updateTask() {
            axios
                .put("http://localhost/todolist/" + this.task.id, this.task)
                .then((res) => {
                    console.log(res.data);
                    this.$refs.form.reset();
                    this.$router.push("/todolist");
                })
                .catch((error) => console.log(error));
        },
    },
    mounted() {
        axios
            .get("http://localhost/todolist/" + this.id)
            .then((result) => {
                console.log(result);
                this.task = result.data;
            })
            .catch((error) => console.log(error));
    },
}
</script>

<style lang="scss" scoped></style>