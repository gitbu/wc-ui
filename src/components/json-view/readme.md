# wc-json-view



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description | Type      | Default |
| ------------ | ------------- | ----------- | --------- | ------- |
| `addAble`    | `add-able`    |             | `boolean` | `false` |
| `canDrag`    | `can-drag`    |             | `boolean` | `false` |
| `data`       | --            |             | `object`  | `data`  |
| `editAble`   | `edit-able`   |             | `boolean` | `false` |
| `removeAble` | `remove-able` |             | `boolean` | `false` |


## Methods

### `editData(path: any, value: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [wc-json-object-content](../json-object-content)

### Graph
```mermaid
graph TD;
  wc-json-view --> wc-json-object-content
  wc-json-object-content --> wc-json-variable-row
  wc-json-object-content --> wc-json-object-key-value
  wc-json-object-content --> wc-json-object-key-value
  wc-json-variable-row --> wc-icon
  wc-json-object-key-value --> wc-icon
  wc-json-object-key-value --> wc-json-object-content
  wc-json-object-key-value --> wc-json-object-content
  style wc-json-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
