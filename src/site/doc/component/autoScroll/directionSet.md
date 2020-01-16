<cn>
### 设置滚动方向
`direction` 滚动方向 -- `top`、`bottom`、`right`、`left`
</cn>

```html
<template>
    <div style="height: 100px; width: 500px">
        <auto-scroll
        direction="left"
        ref="autoScrollLeft">
            <div
                @click='handleClick(item)'
                style="width: 100px; height: 100px; background: orange; margin: 10px 10px;color: white; text-align:center;line-height: 100px;display: inline-block"
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
                this.$refs.autoScrollLeft.start()
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