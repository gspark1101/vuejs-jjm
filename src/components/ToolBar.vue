<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/ask">Ask</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 10px;
  background-color: #41b883;
  color: white;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
  text-decoration: underline;
}
</style>
