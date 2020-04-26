import Home from './Home.vue'
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/js/dist/carousel'

var vm = new Vue({
    el:'#home',
    render: h=>h(Home),
})