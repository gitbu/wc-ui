# table 编辑数据表格

## 示例

<edit-table-data />



## Attributes

| 参数         | 说明             | 类型                         | 可选值      | 默认值 |
| ------------ | ---------------- | ---------------------------- | ----------- | ------ |
| tableData    | 表格的数据       | string(一维数据或二维数组的) |             | ''     |
| col-add-able | 是否可以添加列   | boolean                      | true\|false | true   |
| row-add-able | 是否可一个添加行 | boolean                      | true\|false | true   |



## Events

| 事件名称  | 说明           | 参数                                                      |
| --------- | -------------- | --------------------------------------------------------- |
| insertRow | 插入一行       | (index)当前行的位置                                       |
| delRow    | 删除一行       | (index)当前行的位置                                       |
| insertCol | 插入一列       | (index）当前列的位置                                      |
| delCol    | 删除一列       | (index)当前列的位置                                       |
|           | 编辑单元格内容 | ({rowIndex,colIndex,value})行列的位置以及编辑后单元格的值 |

