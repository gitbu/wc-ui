# JSON 编辑器

## 示例
<json />

> ​	注意：点击key的位置会获取当前节点的路径，试试看哦!

## Attributes

| 参数        | 说明           | 类型    | 可选值 | 默认值 |
| ----------- | -------------- | ------- | ------ | ------ |
| datas       | json数据       | string  | --     | ""     |
| add-able    | 是否可添加     | boolean | --     | false  |
| edit-able   | 是否可编辑     | boolean | --     | false  |
| remove-able | 是否可删除     | boolean | --     | false  |
| can-drag    | 节点是否可移动 | boolean | --     | false  |

## Events

| 事件名称   | 说明              | 参数                             |
| ---------- | ----------------- | -------------------------------- |
| selectNode | 点击key触发的事件 | event，event中detail就是路径数据 |

