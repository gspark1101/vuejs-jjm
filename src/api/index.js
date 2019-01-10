import axios from 'axios';

var config ={
    base_url: 'https://api.hnpwa.com/v0/',
};

function fetchNewsList(){
    //return axios.get(config,base_url+'news/1.json')
    return axios.get(`${config.base_url}news/1.json`)
}
function fetchJobsList(){
    //return axios.get(config,base_url+'news/1.json')
    return axios.get(`${config.base_url}jobs/1.json`)
}
function fetchAskList(){
    //return axios.get(config,base_url+'news/1.json')
    return axios.get(`${config.base_url}ask/1.json`)
}
function fetchUser(name){
    //return axios.get(config,base_url+'news/1.json')
    return axios.get(`${config.base_url}user/${name}.json`)
}
function fetchItems(id){
    //return axios.get(config,base_url+'news/1.json')
    return axios.get(`${config.base_url}item/${id}.json`)
}
export { fetchAskList, fetchJobsList, fetchNewsList, fetchUser, fetchItems }