### PortraitPush Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| maxLength     | 最大展示数据条数，超出的将被移除   | Number  | —             | 15     |
| height        | 容器高度         | String          | '100%'，'200px'        | '100%' |
| itemHeight    | 每一项的高度     | Number          |  —                    | 130    |
| itemToTop     | 每一项距离上一项的距离     | Number |  —                    | 10     |
| itemClass     | 每一项附加的额外Class     | String |  —                     |   —   |
| itemActiveClass | 每一项被点击时，附加的额外Class     | String |  —                     |   —   |

### PortraitPush Events

| 事件名         | 说明            | 参数            |
|-------------  |---------------- |---------------- |
| click         | 当某项被点击时，触发的事件   | item  |

### PortraitPush Methods

| 事件名         | 说明            | 参数            |
|-------------  |---------------- |---------------- |
| appendItem    | 向容器中push一项，htmlStr，item为html字符串，item为点击时回调函数中的参数  | htmlStr，item  |
| clear         | 清除容器中的所有内容  | —           |