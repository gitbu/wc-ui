# start

`wc-ui`是一套使用原生`Web Components`规范开发的跨框架UI组件库

[github项目地址](https://github.com/gitbu/wc-ui)

## 文档

该文档基于[vuepress](https://vuepress.vuejs.org/)动态创建，文中所有组件均为可交互实例。

## 特性

* 跨框架。无论是`react`、`vue`还是原生项目均可使用。
* 组件化。`shadow dom`真正意义上实现了样式和功能的组件化。
* 类原生。一个组件就像使用一个`div`标签一样。
* 无依赖。纯原生，无需任何预处理器编译。
* 无障碍。支持键盘访问。

## 兼容性

现代浏览器。

包括移动端，不支持`IE`。

> `IE`不支持原生`customElements`，[webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)可以实现对`IE`的兼容，不过很多`CSS`特性仍然无效，所以放弃

## 安装

* npm

```shell
npm i wc-ui
```

* cdn

```html
<script type="module">
    import 'https://unpkg.com/wc-ui';

    import 'https://unpkg.com/wc-ui@0.1.3';//指定版本号
</script>

<!--or-->

<script type="module" src="https://unpkg.com/wc-ui"></script>
```

* 直接在`github`上获取最新文件。

目录如下：

```text
.
└── wc-ui
	└── dist // 组件打包目录
	└── docs // 组件库文档
	└── src
    	└──  components //功能组件
    	 	└── icon
    	└── utils // 工具库
```

将整个文件夹放入项目当中（可选择以上几个目录文件即可，其他文件夹均为文档测试）。

## 使用

### html引用（推荐）

```html
<html lang="en">
<head>
  <script src="https://unpkg.com/wc-ui@0.1.3"></script>
</head>
<body>
  <wc-icon type="add"></wc-icon>
</body>
</html>
```

> 现代浏览器支持原生`import`语法，不过需要注意`script`的类型`type="module"`。

### react项目引用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { applyPolyfills, defineCustomElements } from 'wc-ui/loader/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements();
});
```

### vue 项目引用

```js
import { applyPolyfills, defineCustomElements } from 'wc-ui/loader';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/test-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});
```
