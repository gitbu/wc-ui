import Vue from 'vue';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { applyPolyfills, defineCustomElements } from 'wc-ui/loader';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/test-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});



export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(Element)
}