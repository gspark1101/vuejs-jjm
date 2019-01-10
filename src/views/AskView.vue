<template>
    <div>
        <ul>
            <li v-for="arrayItem in ask">
                <router-link v-bind:to="`/item/${arrayItem.id}`">
                {{ arrayItem.title }}
                </router-link>

            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable */ 
//import axios from 'axios';
//import axios from 'axios';
//import { fetchNewsList } from '../api/index.js';
import { fetchAskList } from "../api/index.js";


export default {
    data(){
        return{
            ask: []
        }
    },

    created(){
        //axios.get('https://api.hnpwa.com/v0/news/1.json')
        fetchAskList()
        .then((response)=>{
            // console.log(response.data);
            this.ask = response.data;
        })
        .catch((error)=>{
            //console.log(error);
        });

    }

}
</script>
<style>

</style>
