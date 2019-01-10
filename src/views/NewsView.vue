<template>
  <div><list-item></list-item></div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";
import ListItem from "../components/ListItem.vue";

export default {
  components: {
    ListItem
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>