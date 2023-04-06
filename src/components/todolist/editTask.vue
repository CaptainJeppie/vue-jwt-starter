<template>
    <div id="form-task">
        <h2>Edit Task</h2>
        <form>
            <div class="form-group">
                <label for="taskName">Task Name</label>
                <input type="text" id="taskName" placeholder="Enter Task Name" v-model="task.name" required>
            </div><br>
            <div class="form-group">
                <label for="taskDescription">Task Description</label>
                <textarea type="text" id="taskDescription" placeholder="Enter Task Description" v-model="task.description"
                    required></textarea>
            </div><br>
            <div id="selectPriority">
                <label for="taskPriority">Task Priority</label>
                <div>
                    <input type="radio" id="taskPriority" name="taskPriority" value="Low" v-model="task.priority">
                    <label for="taskPriority">Low</label>
                </div>
                <div>
                    <input type="radio" id="taskPriority" name="taskPriority" value="Medium" v-model="task.priority">
                    <label for="taskPriority">Medium</label>
                </div>
                <div>
                    <input type="radio" id="taskPriority" name="taskPriority" value="High" v-model="task.priority">
                    <label for="taskPriority">High</label>
                </div>
            </div><br>
            <div class="form-group">
                <label for="taskDueDate">Task Due Date</label>
                <input type="date" id="taskDueDate" v-model="task.dueDate" required>
            </div><br>
            <div class="form-group">
                <label for="taskStatus">Task Status</label>
                <select id="taskStatus" v-model="task.status" required>
                    <option>Not Started</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </div>
            <br>
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
                id: "",
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
            axios({
                method: 'put',
                url: "http://localhost/todolist/" + this.task.id,
                data: {
                    id: this.task.id,
                    name: this.task.name,
                    description: this.task.description,
                    priority: this.task.priority,
                    dueDate: this.task.dueDate,
                    status: this.task.status,
                }
            }).then((result) =>{
                console.log(result);
            }).catch((error) => console.log(error));
            this.$router.push('/todolist');
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

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
}

.form-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
}

input {
    border-bottom: 2px solid #adadad;
}

#form-task {
    width: 560px;
    margin: 0 auto;
    background-color: rgb(228, 206, 177);
    padding: 20px 50px 40px;
    box-shadow: 1px 4px 10px 1px #aaa;
}

#form-task * {
    box-sizing: border-box;
}

#form-task h2 {
    text-align: center;
    margin-bottom: 30px;
}

#form-task input {
    margin-bottom: 15px;
}

#form-task input[type=text],
[type=date] {
    display: block;
    height: 32px;
    padding: 6px 16px;
    width: 100%;
    border: none;
    border-radius: 25px;
    background: #f3f3f3;
}

#form-task select {
    display: block;
    height: 32px;
    padding: 6px 16px;
    width: 100%;
    border: none;
    border-radius: 25px;
    background: #f3f3f3;
}

#selectPriority {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
}

#form-task textarea {
    display: block;
    height: 96px;
    padding: 6px 16px;
    width: 100%;
    border: none;
    border-radius: 25px;
    background: #f3f3f3;
}

#form-task button[type=submit] {
    display: block;
    margin: 20px auto 0;
    width: 150px;
    height: 40px;
    border-radius: 25px;
    border: none;
    color: #eee;
    font-weight: 700;
    box-shadow: 1px 4px 10px 1px #aaa;
}
</style>