# wc-json-object-key-value



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute        | Description | Type                | Default     |
| ----------------- | ---------------- | ----------- | ------------------- | ----------- |
| `addAble`         | `add-able`       |             | `boolean`           | `false`     |
| `addData`         | --               |             | `Function`          | `undefined` |
| `canDrag`         | `can-drag`       |             | `boolean`           | `false`     |
| `collapsed`       | `collapsed`      |             | `boolean \| string` | `undefined` |
| `dragData`        | --               |             | `Function`          | `undefined` |
| `dropZonePath`    | `drop-zone-path` |             | `string`            | `undefined` |
| `editAble`        | `edit-able`      |             | `boolean`           | `false`     |
| `editData`        | --               |             | `Function`          | `undefined` |
| `jsonKey`         | --               |             | `String`            | `''`        |
| `jsonVal`         | --               |             | `Object`            | `undefined` |
| `path`            | `path`           |             | `string`            | `undefined` |
| `removeAble`      | `remove-able`    |             | `boolean`           | `false`     |
| `removeData`      | --               |             | `Function`          | `undefined` |
| `setDropZonePath` | --               |             | `Function`          | `undefined` |


## Dependencies

### Used by

 - [wc-json-object-content](../json-object-content)
 - [wc-json-view](../json-view)

### Depends on

- [wc-icon](../icon)
- [wc-json-object-content](../json-object-content)
- [wc-json-object-content](../json-object-content)

### Graph
```mermaid
graph TD;
  wc-json-object-key-value --> wc-icon
  wc-json-object-key-value --> wc-json-object-content
  wc-json-object-key-value --> wc-json-object-content
  wc-json-object-content --> wc-json-variable-row
  wc-json-object-content --> wc-json-object-key-value
  wc-json-object-content --> wc-json-object-key-value
  wc-json-variable-row --> wc-icon
  wc-json-view --> wc-json-object-key-value
  style wc-json-object-key-value fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
