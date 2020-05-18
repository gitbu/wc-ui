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

::: slot code
```html
<template>
  <div>
    <wc-json-view 
      ref="jsonView"
      :datas="jsonData"
      :edit-able="editAble"
      :remove-able="removeAble"
      :add-able="addAble"
      :can-drag="canDrag"
      :collapsed="collapsed"
    />
    <div v-if="path.length > 0">
      当前节点的路径：(路径是用一个数组表示的)
      <wc-json-view 
        :datas="_path"
        :collapsed=2
      />
    </div>
    <div>
      <h3>设置属性</h3>
      <el-checkbox v-model="editAble">可编辑</el-checkbox>
      <el-checkbox v-model="addAble">可添加</el-checkbox>
      <el-checkbox v-model="removeAble">可删除</el-checkbox>
      <el-checkbox v-model="canDrag">可移动</el-checkbox>
      <div style="margin-top: 10px;">
        collapsed:
        <el-select size="mini" v-model="collapsed" placeholder="请选择展开层级">
          <el-option
            v-for="item in [0, 1, 2, 3, 4, 5, 6, 7]"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>
<script>
import Container from './container';

export default {
  components: {
    Container
  },
  data() {
    return {
      jsonData: JSON.stringify(jsonData),
      path: [],
      editAble: false,
      removeAble: false,
      addAble: false,
      canDrag: false,
      collapsed: 1
    }
  },
  computed: {
    _path() {
      return JSON.stringify(this.path)
    }
  },
  mounted() {
    console.log(this.$refs);
    this.$refs.jsonView.addEventListener('selectNode', (e) => {
      const { detail } = e;
      this.path = detail;
    })
  }
}
const jsonData = {
  "shareConfig": {
    "coverImage": "",
    "title": "这是#分享者#的大力推荐",
    "description": "这是#分享者#大力推荐的H5"
  },
  "title": "未命名场景",
  "pages": [
    {
      "uuid": "0dabb27c-0fd3-4b6e-b539-3e8ff4d95a90",
      "name": "",
      "elements": [
        {
          "uuid": "4ff7b22e-1718-4fdd-bf99-b92c2d121174",
          "elName": "qk-text",
          "animations": [
            {
              "type": "slideInDown",
              "duration": 1,
              "infinite": "",
              "interationCount": 1,
              "delay": 0
            }
          ],
          "commonStyle": {
            "position": "absolute",
            "width": 375,
            "height": 40,
            "top": 63,
            "left": 1
          },
          "events": [
            {
              "type": "link",
              "url": "http:www.baidu.com"
            }
          ],
          "propsValue": {
            "text": "这是一段文字"
          },
          "valueType": "String",
          "isForm": false
        }
      ],
      "commonStyle": {
        "backgroundColor": "rgba(18, 159, 220, 1)",
        "backgroundImage": "",
        "backgroundSize": "cover"
      }
    }
  ],
  "author": "5dd759531659195eb93b15e6",
  "created": "2020-05-10T09:24:40.661Z",
  "updated": "2020-05-10T09:24:40.661Z",
  "__v": 0
}
</script>
```
:::