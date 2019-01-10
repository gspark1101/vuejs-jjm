<template>
  <div>
    <p>name : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created : {{ user.created }}</p>
  </div>
</template>

<script>
import { fetchUser } from "../api/index.js";
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    const userName = this.$route.params.id;
    fetchUser(userName)
      .then(response => (this.user = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style></style>