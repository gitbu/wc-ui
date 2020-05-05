import { Component, Host, Prop, State, h } from '@stencil/core';
import { isArray, isObject } from '../../utils/utils';

enum VALUE_MODE  {
  VIEW = 'view',
  EDIT = 'edit'
}
enum TOOL_VISIBLE {
  HIDDEN = 'hidden',
  VISIBLE = 'visible'
}
@Component({
  tag: 'wc-json-variable-row',
  styleUrl: 'json-variable-row.css',
  shadow: true
})
export class JsonVariableRow {
  @State() toolVisible: TOOL_VISIBLE = TOOL_VISIBLE.HIDDEN;
  @State() valueMode: VALUE_MODE = VALUE_MODE.VIEW;
  @State() newVal: any

  @Prop() editData: Function
  @Prop() removeData: Function;
  @Prop() jsonKey: string
  @Prop() jsonVal: any
  @Prop() path: string
  @Prop() editAble: boolean
  @Prop() removeAble: boolean
  @Prop() canDrag: boolean

  render() {
    return (
      <Host>
        <div class="variable-row"
          draggable={this.canDrag}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleEdit}
          onDragStart={this.handleDragStart}
        >
          <span>{`"${this.jsonKey}": `}</span>
          {this.valueMode === VALUE_MODE.VIEW && (
            <span
              style={{ color: this.getFontColorOfValue(this.jsonVal)}}
            >
              {this.getNormarlizeVal(this.jsonVal)}
            </span>
          )}
          {this.valueMode === VALUE_MODE.EDIT && (
            <div style={{ display: 'inline-flex' }}>
              <textarea
                style={{
                  color: '#f4bf75',
                  background: '#383830'
                }}
                value={this.newVal}
                onKeyUp={this.handleNewValChange}
              />
              <div>
                <div>
                  <span style={{ marginRight: '6px' }} onClick={this.handleEditValClose}>
                    <wc-icon type="close" color="#fd971f" />
                  </span>
                  <span onClick={this.handleEditData}>
                    <wc-icon type="check" color="#ae81ff"/>
                  </span>
                </div>
                <div>
                  {this.renderJson()}
                </div>
              </div>
            </div>
          )}
          <span style={{ visibility: this.toolVisible, marginLeft: '8px' }}>
            {this.editAble && (
              <span style={{ marginRight: '4px', cursor: 'pointer' }} onClick={this.handleEdit}>
                <wc-icon type="edit" color="#ae81ff" size="14"></wc-icon>
              </span>
            )}
            {this.removeAble && (
              <span style={{cursor: 'pointer'}} onClick={this.handleRemove}>
                <wc-icon type="close" color="#fd971f" size="14"></wc-icon>
              </span>
            )}
          </span>
        </div>
      </Host>
    );
  }

  getFontColorOfValue(val) {
    if (typeof(val) === 'boolean') return '#ae81ff';
    if (val === null) return '#f4bf75'

    return '#fd971f'
  }

  getNormarlizeVal(val) {
    if (typeof(val) === 'string') return `"${val}"`
    if (typeof(val) === 'boolean') return "" + val;
    if (val === null)  return 'NULL'

    return val;
  }

  handleMouseEnter = () => {
    this.toolVisible = TOOL_VISIBLE.VISIBLE;
  }

  handleMouseLeave = () => {
    this.toolVisible = TOOL_VISIBLE.HIDDEN;
  }

  handleEdit = () => {
    this.valueMode = VALUE_MODE.EDIT;
    this.toolVisible = TOOL_VISIBLE.HIDDEN;
  }

  handleRemove = () => {
    this.removeData(this.path);
  }

  handleNewValChange = (e) => {
    this.newVal = e.target.value;
  }

  renderJson = () => {
    try {
      const json = JSON.parse(this.newVal);
      let jsonEle = null;
      if (isObject(json)) {
        jsonEle = (
          <span>
            {`{...}`}
          </span>
        );
      }
      if (isArray(json)) {
        jsonEle = (
          <span>
            {`[...]`}
          </span>
        );
      }

      return (
        <span onClick={this.handleEditObjectData}>
          {jsonEle}
          <wc-icon type="check" color="#ae81ff"/>
        </span>
      )

    } catch(err) {
      return null
    }
  }

  handleEditValClose = (e) => {
    e.stopPropagation();
    this.valueMode = VALUE_MODE.VIEW;
  }

  handleEditData = (e) => {
    e.stopPropagation();
    this.valueMode = VALUE_MODE.VIEW;
    this.editData(this.path, this.newVal);
  }

  handleEditObjectData = (e) => {
    e.stopPropagation();
    this.valueMode = VALUE_MODE.VIEW;
    const val = JSON.parse(this.newVal);
    this.editData(this.path, val);
  }

  handleDragStart = (e) => {
    e.stopPropagation();
    e.target.style.width='50%';
    const data = {
      [this.jsonKey]: this.jsonVal
    }
    const _data = JSON.stringify(data);
    e.dataTransfer.setData('path', this.path);
    e.dataTransfer.setData('data', _data);
  }


}
