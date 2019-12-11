// render>index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index.js';
import routers from './router/index.js';
import app from './app.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: routers
})

//取消 Vue 所有的日志与警告
Vue.config.silent = true;
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(app)
});