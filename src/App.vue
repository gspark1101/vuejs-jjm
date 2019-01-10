<template>
  <div>
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import ToolBar from "./components/ToolBar.vue";

export default {
  components: {
    "tool-bar": ToolBar
  }
};
</script>

<style>
/* @import '../css/common.css'; */
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}
</style>
