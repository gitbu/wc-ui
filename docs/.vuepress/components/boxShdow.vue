<template>
  <div>
    <div class="title">
      基础投影 box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
    </div>
    <div class="basic-shadow"></div>
    <div class="title">
      浅色投影 box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    </div>
    <div class="small-shadow"></div>
  </div>

</template>
<style scoped>
  .title {
    margin: 15px 0;
  }
  .basic-shadow {
    height: 100px;
    width: 50%;
    border: 1px solid #eee;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12)
  }
  .small-shadow {
    height: 100px;
    width: 50%;
    border: 1px solid #eee;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
</style>

