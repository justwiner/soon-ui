<cn>
### speed 控制移动时的速度
`speed`属性，默认值`100`，含义为，`每秒往设置的方向上移动100px`
</cn>

```html
<template>
    <div style="height: 300px; width: 100px">
        <auto-scroll
        :hStop='true'
        :speed='200'
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