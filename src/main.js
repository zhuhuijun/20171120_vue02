import Vue from 'vue';
import App from './App.vue';
const vm = new Vue({
    el:'#app',
    ...App
    //render:(h)=>h(App)
})