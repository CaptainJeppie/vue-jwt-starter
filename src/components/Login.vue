<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input id="inputUsername" v-model="username" type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input type="password" v-model="password" class="form-control" id="inputPassword" />
            </div>
            <button type='button' @click="login" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "../axios-auth";
import { useHenkStore } from "../stores/store";

export default {
  setup() {
    return{
      store: useHenkStore()
    }
    },
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.store.login(this.username, this.password)
      .then(result => {
        this.$router.push('/products');
      }).catch(error => {
        console.log(error);
      });
    },
  },
};
</script>

<style></style>