<template>
  <div class="border-table">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="size"
        label="粗细"
        width="180">
      </el-table-column>
      <el-table-column
        prop="example"
        label="示例">
        <template slot-scope="scope">
          <div :style="{borderBottom: `${scope.row.size} ${scope.row.type} #eee`}">
          </div>
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
          name: '实线',
          type: 'solid',
          size: '1px',
        }, {
          name: '虚线',
          type: 'dashed',
          size: '2px',
        }]
      }
    }
  }
</script>
<style scoped>
  .border-table {
    margin-top: 20px;
  }
  .border-table /deep/ table {
    margin: 0;
  }
</style>


