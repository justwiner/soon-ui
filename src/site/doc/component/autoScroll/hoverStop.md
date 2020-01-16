<cn>
### hStop 鼠标放入容器中，暂停动画
`hStop`属性，默认值`false`
</cn>

```html
<template>
    <div style="height: 300px; width: 100px">
        <auto-scroll
        :hStop='true'
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