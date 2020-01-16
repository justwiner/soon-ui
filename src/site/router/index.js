import Vue from "vue";
import Router from "vue-router";
import Component from '../doc/component.js';
import Changelog from "../doc/changelog.md";
import Install  from "../doc/install.md";
import Start from "../doc/start.md";
import DemoMd from "../module/demo-md";

Vue.use(Router);
export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/doc/install"
        },
        {
            path: "*",
            redirect: "/doc/install"
        },
        {
            path: "/doc",
            component: DemoMd,
            children: [
                {
                    path: "changelog",
                    name: "changelog",
                    component: Changelog,
                },
                {
                    path: "install",
                    name: "install",
                    component: Install,
                },
                {
                    path: "quick-start",
                    name: "start",
                    component: Start,
                }
            ]
        },
        ...Component
    ]
});
