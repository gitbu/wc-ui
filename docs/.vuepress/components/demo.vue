<template>
  <wc-json-view :datas="jsonData" />
</template>
<script>
import Index from './index';
export default {
  components: {
    Index
  },
  data() {
    const data = {a: {b: 3}};
    return {
      jsonData: JSON.stringify(data)
    }
  }
}
</script>