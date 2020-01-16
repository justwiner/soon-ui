<template>
    <div class="demo-left_wrap">
        <div class="demo-left">
            <ul>
                <li class="_h1"
                    :class="active('changelog')">
                    <a href="#/doc/changelog">更新日志</a>
                </li>
                <li class="_h2">开发指南</li>
                <li :class="active('install')">
                    <a href="#/doc/install">安装</a>
                </li>
                <li :class="active('start')">
                    <a href="#/doc/quick-start">快速上手</a>
                </li>
                <li class="_h2">组件</li>
                <li v-for="item in list"
                    :class="active(item.name)">
                    <a :href="`#${item.path}`">{{item.des}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import component from "../doc/component.js";
    export default {
        name: "demo-left",
        data(){
            return {
                list: component
            }
        },
        methods: {
            active(name){
                return {
                    active: this.$route.name === name
                };
            }
        }
    };
</script>
<style lang="scss">
.demo-left_wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.demo-left {
    overflow-y: scroll;
    height: 100%;
    padding-right: 32px;
    margin-right: -17px;
    ul {
        opacity: 0.75;
        padding-left: 60px;
        margin: 48px 0;
        overflow: hidden;
        border-right: 1px solid #eee;
        transition: 600ms;
        &:hover {
            opacity: 1;
        }
    }
    li.active a {
        color: #409eff;
    }
    li,li a {
        margin: 16px 8px;
        list-style: none;
        font-size: 14px;
        color: black;
        letter-spacing: 0;
        line-height: 20px;
        cursor: pointer;
        transition: 300ms;
        text-decoration: none;
        &._h1,&._h1 a {
            font-size: 16px;
            font-weight: bold;
            margin: 24px 0;
            color: black;
        }
        &:hover {
            color: #409eff;
        }
        &._h2,&._h2 a {
            margin-top: 32px;
            margin-left: 0;
            font-size: 16px;
            cursor: default;
            /*color: #3EE*/
            color: black;
            font-weight: bold;
            &:hover{
                color: black;
            }
        }
    }
}
</style>