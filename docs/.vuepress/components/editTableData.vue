<template>
  <wc-table
    ref="jsonTable"
    :table-data="tableDataStr"
  />
</template>
<script>
const row = ['name', 'age', 'sex', 'like'] 
export default {
  data() {
    return {
      tableData:[row] 
    }
  },
  computed: {
    tableDataStr() {
      const res = JSON.stringify(this.tableData)
      return res;
    }
  },
  mounted() {
    this.$refs.jsonTable.insertRow = (index) => {
      this.tableData.splice(index, 0, row)
    }
    this.$refs.jsonTable.delRow = (index) => {
      this.tableData.splice(index, 1)
    }
    this.$refs.jsonTable.insertCol = (index) => {
      this.tableData.forEach(item => item.splice(index, 0, ''))
    }

    this.$refs.jsonTable.delCol = (index) => {
      this.tableData.forEach(item => item.splice(index, 1))
    }

    this.$refs.jsonTable.editCell = ({rowIndex, colIndex, value}) => {
      this.tableData[rowIndex][colIndex] = value;
    }
  },
}
</script>

