<template>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <form>
                <h2>Register</h2>
              <div class="mb-3">
                <label for="inputUsername" class="form-label">Username</label>
                <input id="inputUsername" v-model="username" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="inputEmail" class="form-label">Email</label>
                <input id="inputEmail" v-model="email" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" v-model="password" class="form-control" id="inputPassword" />
              </div>
              <button type='button' @click="register" class="btn btn-primary">Register</button><br>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import axios from "../axios-auth";
  
  export default {
    name: "register",
    data() {
      return {
        username: "",
        password: "",
        email: "",
      };
    },
    methods: {
        register() {
        axios
          .post("users/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            this.$router.push("/login");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
  };
  </script>
  
  <style></style>