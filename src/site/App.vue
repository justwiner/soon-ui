<template>
    <demo-layout>
        <router-view></router-view>
        <template slot="left">
            <demo-left></demo-left>
        </template>
    </demo-layout>
</template>

<script>
    import DemoLayout from "./module/demo-layout";
    import DemoLeft from "./module/demo-left";
    export default {
        name: "app",
        components: {DemoLeft, DemoLayout},
    };
</script>
<style lang="scss">
.demo-anchor {
    display: none
}
</style>