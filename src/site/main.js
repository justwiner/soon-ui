import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import DemoBox from "./module/demo-box.vue";
import DemoMd from "./module/demo-md.vue";
import 'highlight.js/styles/ocean.css';
import QuickUI from "../index.js";
import "./style/markdown.scss";
Vue.use(QuickUI);

Vue.use(Router);
Vue.component('demo-box', DemoBox);
Vue.component('demo-md', DemoMd);
new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: {App},
});