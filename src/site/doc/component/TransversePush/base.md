<cn>
## TransversePush 横向PUSH动画
通过调用appendItem方法，通过动画，将内容append到首个位置
### 基本用法
</cn>

```html
<template>
    <transverse-push
    :itemWidth='itemWidth'
    :itemActiveClass='activeClass'
    :width='containerWidth'
    ref="pushDom"
    @click="handleClick"
    style="height: 100px"
    ></transverse-push>
</template>
<script>
    export default{
        data(){
            return {
                itemWidth: 100,
                activeClass: '',
                containerWidth: '100%',
                intervalId: null,
            };
        },
        beforeDestroy () {
            this.intervalId && clearInterval(this.intervalId)
        },
        mounted(){
            let styleStr = `width: 100px;height: 100px;background: orange;display: flex;justify-content: center;align-items: center;color: white`
            let htmlStr = `<div style=${styleStr} class="demo-box">点击一下试试</div>`
            this.$refs.pushDom.appendItem(htmlStr, {
                name: '成功触发点击事件'
            })
            this.intervalId = setInterval(() => {
                let htmlStr = `<div style=${styleStr} class="demo-box">点击一下试试</div>`
                if (this.$refs.pushDom) {
                    this.$refs.pushDom.appendItem(htmlStr, {
                        name: '成功触发点击事件'
                    })
                }
            }, 2000)
        },
        methods: {
            handleClick (data) {
                alert(data.name)
            }
        }
    }
</script>
```