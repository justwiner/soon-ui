<cn>
## AutoScroll 容器中的滚动动画
自动滚动容器中的元素，无限轮播
### 基本用法
</cn>

```html
<template>
    <div style="height: 300px; width: 100px">
        <auto-scroll
        ref="autoScroll">
            <div
                @click='handleClick(item)'
                style="width: 100px; height: 100px; background: orange; margin: 10px 0;color: white; text-align:center;line-height: 100px"
                v-for="(item, index) in 4"
                :key="index">
                {{item}}
            </div>
        </auto-scroll>
    </div>
</template>
<script>
    export default{
        mounted(){
            this.$nextTick(() => {
                this.$refs.autoScroll.start()
            })
        },
        methods: {
            handleClick (data) {
                alert(data)
            }
        }
    }
</script>
```