import Vue from 'vue';
import index from "./index.vue";
import '../static/css/global.css';

new Vue({
    el: '#app',
    render: h=>{
        return h(index)
    }
});
