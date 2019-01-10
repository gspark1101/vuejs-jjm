<template>
  <div>
    <section>
      <div>User Name : {{ item.user }}</div>
    </section>
    <section>
      <h1>{{ item.title }}</h1>
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import { fetchItems } from '../api/index.js'
export default {
 data(){
     return{
         item:{},
     }
 },
 created(){
     console.log(this.$route.params.id);
     const id = this.$route.params.id;
     fetchItems(id)
     .then(response => this.item = response.data)
     .catch(error => console.log(erroe));
 }
}
</script>

<style>

</style>
