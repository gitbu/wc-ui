# wc-json-view



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type                | Default |
| ------------ | ------------- | ----------- | ------------------- | ------- |
| `addAble`    | `add-able`    |             | `boolean`           | `false` |
| `canDrag`    | `can-drag`    |             | `boolean`           | `false` |
| `collapsed`  | `collapsed`   |             | `boolean \| string` | `'1'`   |
| `data`       | --            |             | `object`            | `data`  |
| `editAble`   | `edit-able`   |             | `boolean`           | `false` |
| `removeAble` | `remove-able` |             | `boolean`           | `false` |


## Dependencies

### Depends on

- [wc-json-object-key-value](../json-object-key-value)

### Graph
```mermaid
graph TD;
  wc-json-view --> wc-json-object-key-value
  wc-json-object-key-value --> wc-icon
  wc-json-object-key-value --> wc-json-object-content
  wc-json-object-key-value --> wc-json-object-content
  wc-json-object-content --> wc-json-variable-row
  wc-json-object-content --> wc-json-object-key-value
  wc-json-object-content --> wc-json-object-key-value
  wc-json-variable-row --> wc-icon
  style wc-json-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
