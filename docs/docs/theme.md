# 自定义主题
wc-ui的没有用一些`less`、`sass`、`stylus`等预处理器，而是用的[css变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
## 主题颜色定制

```css
wc-icon{
    --wc-primary-color: #42b983;/**单独设置**/
}
:root {
    --wc-primary-color: #42b983;/**全局设置**/
}
```



##其他主题定制

```css
  /* 链接色 */
  --wc-link-color: #1890ff;

  /* 成功色 */
  --wc-success-color: #67C23A;
  /* 警告色 */
  --wc-warning-color: #E6A23C;
  /* 错误色 */
  --wc-error-color: #F56C6C;

  --wc-primary-text-color: #303133;
  /*  常规文字颜色 */
  --wc-regular-text-color: #606266;
  /* 次要文本色 */
  --wc-secondary-text-color: #909399;
  /* 占位文字 */
  --wc-placeholder-text-color: #C0C4CC;


```

