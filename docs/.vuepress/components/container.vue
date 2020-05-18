<template>
  <div class="container">
    <div class="source">
      <slot name="source" />
    </div>
    <div v-show="viewCodeStatus" class="meta">
      <slot name="code" />
    </div>
    <div class="code-view-control" @click="handleViewCodeStatus">
      {{viewCodeTxt}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewCodeStatus: false
    }
  },
  computed: {
    viewCodeTxt() {
      if (this.viewCodeStatus) return '隐藏代码';

      return '显示代码';
    }
  },
  methods: {
    handleViewCodeStatus() {
      this.viewCodeStatus = !this.viewCodeStatus
    }
  }
}
</script>
<style scoped>
  .container{
    border: 1px solid #ebebeb;
    border-radius: 3px;
  }
  .source {
    padding: 15px;
  }
  .meta {
    height: 400px;
    overflow: auto;
    padding: 10px;
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
  }
  .code-view-control {
    height: 35px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    border-top: 1px solid #eaeefb;
  }
</style>


