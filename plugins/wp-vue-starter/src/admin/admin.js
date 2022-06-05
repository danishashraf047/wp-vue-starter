// import Vue from 'vue'
// import Vuex from 'vuex'
// import Router from 'vue-router'
import store from '../store/index';
import App from './App.vue';
import Settings from './components/pages/Settings.vue';
import TabNavigation from './components/tabs/Navigation.vue';
import GeneralTab from './components/tabs/GeneralTab.vue';
import AnotherTab from './components/tabs/AnotherTab.vue';
import { createApp } from "vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
// Vue.use( Vuex )
// Vue.use( Router )
const routes = [
    {
        path: '/', components: { default: GeneralTab, tab: TabNavigation },
        // path: '/', component: () => import('./components/tabs/GeneralTab.vue'),
    },
    {
        path: '/another', components: { default: AnotherTab, tab: TabNavigation },
    },
    {
        path: '/settings', components: { default: Settings },
    },
];
export const router = createRouter({
    history: createWebHistory('#/'),
    routes: routes
});
// const router = new VueRouter({
//     routes,
// })
//
// new Vue({
//     el: '#wpvk-admin-app',
//     store,
//     router,
//     render: h => h( App )
// })
const app = createApp(App);
app.use(createStore(store));
app.use(router);
app.mount("#wpvk-admin-app");
//# sourceMappingURL=admin.js.map