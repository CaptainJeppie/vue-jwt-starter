<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <h2>Login</h2>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input id="inputUsername" v-model="username" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" />
            </div>
            <button type='button' @click="login" class="btn btn-primary">Login</button><br>
            <a href="/register">No account, register</a>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../axios-auth";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("users/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem('jwt', res.data.jwt);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('loggedIn', true);

          axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.jwt;

          this.$router.push('/todolist');
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