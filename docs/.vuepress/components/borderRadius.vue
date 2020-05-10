<template>
  <div class="border-radius-container">
    <div v-for="item of confData" class="border-radius-item" :style="getBorderRadiusStyle(item.size)">
      <div>{{item.title}}</div>
      <div>border-radius:{{item.size}}</div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      confData: conf
    }
  },
  methods: {
    getBorderRadiusStyle(size) {
      return {
        borderRadius: size
      };
    }
  }
  
}
const conf = [{
  title: '小圆角',
  size: '2px'
}, {
  title: '大圆角',
  size: '4px'
}, {
  title: '圆形圆角',
  size: '30px'
}]
</script>
<style scoped>
  .border-radius-container {
    display: flex;
    justify-content: space-between;
  }
  .border-radius-item {
    width: 150px;
    height: 60px;
    padding: 10px;
    border: 1px solid #d7dae2;
  }
</style>


