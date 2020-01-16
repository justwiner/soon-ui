<template>
    <div class="demo-layout">
        <div class="demo-layout_main">
            <div class="demo-layout_container">
                <slot></slot>
            </div>
        </div>
        <div class="demo-layout_left">
            <slot name="left"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo-layout"
    };
</script>
<style lang="scss">
$headerHeight: 0px;
html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
body {
    background: white;
    background-size: cover;
}
.demo-layout {
    height: 100%;
    overflow-y: scroll;
    margin-right: -17px;
    padding: 0 200px;
    .demo-layout_main {
        box-sizing: border-box;
        width: 100%;
        padding-left: 320px;
        padding-right: 48px;
        padding-top: 48px;
        margin-top: $headerHeight;
    }
    .demo-layout_container {
        position: relative;
    }
    .demo-layout_left {
        width: 350px;
        height: 100%;
        position: fixed;
        top: 0;
        left: 170px;
    }
}
</style>