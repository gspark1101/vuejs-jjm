<template>
  <ul class="container">
    <!--
      <div v-if="isString">
        hello
      </div>
      <small v-else>
        olleh
      </small>
    -->

    <li v-for="item in listItems" class="post">
      <div class="point">
        <!-- 1 -->
        {{ item.points || 0 }}

        <!-- 2 -->
        <!--
          <template v-if="!item.points">
            {{ item.points }}
          </template>
          <template v-else>
            {{ 0 }}
          </template>
        -->
      </div>
      <!--
        <div class="point">

        </div>
      -->
      <div class="title">
        <div>{{ item.title }}</div>
        <small>
          by
          <!-- jobs domain 링크 예시 -->
          <!-- <a :href="job.url">{{ job.domain }}</a> -->
          <template v-if="item.user">
            <!-- NewsView 일 때 -->
            <router-link v-bind:to="`/user/${item.user}`" class="link-text">
              {{ item.user }}
            </router-link>
          </template>
          <template v-else>
            <!-- JobsView 일 때 -->
            <a :href="job.url">{{ job.domain }}</a>
          </template>
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    listItems() {
      if (this.$route.path === "/jobs") {
        return this.$store.state.jobs;
      } else if (this.$route.path === "/news") {
        return this.$store.state.news;
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.point {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
</style>
