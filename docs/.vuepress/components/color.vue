<template>
  <div class="container">
    <div
      class="color"
      v-for="item of txtData"
      :style="getBgColor(item.color)"
    >
      <div>{{item.txt}}</div>
      <div>{{item.color}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: String
  },
  computed: {
    txtData() {
      return COLOR_MAP[this.type] || COLOR_MAP.main
    }
  },
  methods: {
    getBgColor(color) {
      return {
        background: color
      };
    }
  }
}
const COLOR_MAP = {
  main: [{
    txt: '主色',
    color: '#409EFF',
  }],
  neutra: [{
    txt: 'Success',
    color: '#67C23A',
  }, {
    txt: 'Warning',
    color: '#E6A23C',
  }, {
    txt: 'Dangers',
    color: '#F56C6C',
  }, {
    txt: 'Info',
    color: '#909399',
  }],
  auxiliary: [{
    txt: '主要文字',
    color: '#303133',
  }, {
    txt: '常规文字',
    color: '#606266',
  }, {
    txt: '次要文字',
    color: '#909399',
  }, {
    txt: '占位文字',
    color: '#C0C4CC',
  }]
}
</script>
<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
  }
  .color {
    color: #fff;
    width: 150px;
    height: 80px;
    border-radius: 2px;
    font-size: 14px;
    padding: 20px 0 0 20px;
  }

</style>
