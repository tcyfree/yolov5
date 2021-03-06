// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import IMG from './Img'
import VueRouter from 'vue-router'
import axios from 'axios'
// import Element from 'element-ui'
import echarts from "echarts";

Vue.prototype.$echarts = echarts;
// import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../src/assets/style.css'
import './theme/index.css'

// Vue.use(Element)

//按需引入
import { Dialog,Card,Image,Button,Tabs,Table,TabPane,TableColumn,Link,Progress } from 'element-ui';
Vue.use(Dialog)
Vue.use(Card)
Vue.use(Image)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(Table)
Vue.use(TabPane)
Vue.use(TableColumn)
Vue.use(Link)
Vue.use(Progress)

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http = axios

const router = new VueRouter({
    routes: [
        {path: "/App", component: App, meta: {title: "眼疾辅助诊断系统"},},
        {path: "/img", component: IMG, meta: {title: "眼疾辅助诊断系统"},},
    ],
    mode: "history"
})

// // 全局注册组件
Vue.component("App", App);
Vue.component("IMG", IMG);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
