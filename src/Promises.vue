<template>
  <div>
    <h3>메인 페이지</h3>
    <button @click="loginUser">login</button>
    <h3>리스트 페이지</h3>
    <div>{{ hobbyList }}</div>
  </div>
</template>

<script>
import axios from "axios";L

export default {
  data() {
    return {
      hobbyList: []
    };
  },
  methods: {
    loginUser() {
      // -- 비동기 사고 전 --
      // 1. 로그인 콘솔 출력
      // 2. 로그인 데이터 정보 가져오기
      // 3. 받아온 데이터를 화면에 표시

      // -- 비동기 사고 후 --
      // 1. 로그인 콘솔 출력
      // 2. 로그인 데이터 정보 가져오기
      // 3. 데이터를 받아 왔을 때만 화면에 표시

      console.log("logged in");
      this.fetchUserInfo().then(response => {
        if (this.list.name === "Leanne Graham") {
          fetchUserHobbies()
            .then()
            .catch();
        }
      });
    },
    fetchUserInfo() {
      return axios.get("https://jsonplaceholder.typicode.com/users/1");
      // .then(response => {
      //   console.log(response);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
    },
    fetchUserHobbies() {
      const hobbies = [1, 2, 3];

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(hobbies);
        }, 2000);
      });
    }
  }
};
</script>

<style></style>