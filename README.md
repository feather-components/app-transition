AppTransition
================
基于vue和vue-router，使用app滑动淡入淡出的页面切换动画

### 注：使用前，确保已安装vue router

## 使用
```sh
feather2 install feather-components/app-transition
#or webpack
npm install feather-components/app-transition
```

```js
import Vue from 'vue';
import VueRouter from 'vue_router';
import AppTransition from 'app-transition';

Vue.use(AppTransition);

let router = new Router();

new Vue({
    el: '#app',
    router
});
```

```html
<div id="app">
    <app-transition />
</div>
```

### feather2/conf.js

```js
//项目中，额外加上，因目录下的index.js使用了es6
feather.match('components/app-transition/**.js', {
    parser: 'es6-babel'
});
```