
## 快速上手
本节将介绍在项目中如何使用Quick-ui

### 引入Quick-ui
引入完整的 Quick-ui。

#### 完整引入
在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import QuickUI from 'quick-ui';
import App from './App.vue';

Vue.use(QuickUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```