import VueRouter from "vue-router";

import Home from './components/Home.vue';
import Main_Form from "./components/Main_Form";
import Error from "./components/Error";

export default new VueRouter({
    mode: 'history',
    routes:[
        { path: '/', component: Home, name: 'home' },
        { path: '/add', component: Main_Form, name: 'add' },
        { path: '/:id/edit', component: Main_Form, name: 'edit'},
        { path: '*', component: Error, name: '404' },
    ]
});
