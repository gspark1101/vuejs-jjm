<template>
  <div>
    <ul>
      <li v-for="job in jobs">{{ job.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      jobs: []
    };
  },
  beforeMount() {
    axios
      .get("https://api.hnpwa.com/v0/jobs/1.json")
      .then(({ data }) => (this.jobs = data))
      .catch(error => console.log(error));
  }
};
</script>

<style></style>