<template>
  <wc-json-view :datas="jsonData" />
</template>
<script>
export default {
  data() {
    const data = {a: {b: 3}};
    return {
      jsonData: JSON.stringify(data)
    }
  }
}
</script>