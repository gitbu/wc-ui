import Vue from 'vue';

import { applyPolyfills, defineCustomElements } from 'wc-ui/loader';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/test-\w*/];

applyPolyfills().then(() => {
  defineCustomElements();
});

