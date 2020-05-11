<template>
  <div class="fontSize-table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="level"
        label="层级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fontSize"
        label="字体大小"
        width="180">
      </el-table-column>
      <el-table-column
        prop="example"
        width="180"
        label="示例">
        <template slot-scope="scope">
          <span :style="{fontSize: scope.row.fontSize}">
            {{scope.row.example}}
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          level: '辅助文字',
          fontSize: '12px',
          example: '使用wc-ui组件'
        }, {
          level: '正文（小）',
          fontSize: '13px',
          example: '使用wc-ui组件'
        }, {
          level: '正文',
          fontSize: '14px',
          example: '使用wc-ui组件'
        }, {
          level: '小标题',
          fontSize: '16px',
          example: '使用wc-ui组件'
        }, {
          level: '标题',
          fontSize: '18px',
          example: '使用wc-ui组件'
        }, {
          level: '主标题',
          fontSize: '20px',
          example: '使用wc-ui组件'
        }]
      }
    }
  }
</script>
<style scoped>
  .fontSize-table {
    margin-top: 20px;
  }
  .fontSize-table /deep/ table {
    margin: 0;
  }
</style>


