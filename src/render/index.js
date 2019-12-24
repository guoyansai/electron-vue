import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index.js';
import routers from './router/index.js';
import app from './app.vue';
import './static/css/global.css';

Vue.use(VueRouter);
function routesToMenu() {
    let mykeya = 0;
    let mykeyb = 0;
    let mymenu = [];
    for (const itema of routers[0].children) {
        mymenu[mykeya] = { path: itema.path, title: itema.meta.title, des: itema.meta.des, children: [] }
        mykeyb = 0
        if (itema.children) {
            for (const itemb of itema.children) {
                mymenu[mykeya].children[mykeyb] = { path: itemb.path, title: itemb.meta.title, des: itemb.meta.des }
                mykeyb = mykeyb + 1;
            }
        }
        mykeya = mykeya + 1;
    }
    console.log(666.123,routers)
    return mymenu;
};
let menu = routesToMenu();
Vue.prototype.MENU = menu;
Vue.use(VueRouter);
let router = new VueRouter({
    // mode: 'history',
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