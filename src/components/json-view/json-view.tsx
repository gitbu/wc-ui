import { Component, h, Prop, State, Event, Watch } from '@stencil/core';
import set from 'lodash/set';
import cloneDeep from 'lodash/cloneDeep';
import { isObject, isArray } from '../../utils/utils';

@Component({
  tag: 'wc-json-view',
  styleUrl: 'json-view.css',
  shadow: true
})
export class JsonView {
  @State() dropZonePath = '';

  @Prop({ mutable: true }) datas: string;
  @Prop() addAble: boolean = false;
  @Prop() editAble: boolean = false;
  @Prop() removeAble: boolean = false;
  @Prop() canDrag: boolean = false;
  @Prop() collapsed: boolean | string = '1';

  @State() data = JSON.parse(this.datas);

  @Watch('datas')
  changeData(newVal) {
    this.data = JSON.parse(newVal);
  }
  render() {
    return (
      <div class="container">
        <wc-json-object-key-value
          path={[]}
          dropZonePath={this.dropZonePath}
          jsonVal={this.data}
          editData={this.editData}
          addAble={this.addAble}
          editAble={this.editAble}
          removeAble={this.removeAble}
          canDrag={this.canDrag}
          collapsed={this.collapsed}
          dragData={this.dragData}
          addData={this.addData}
          removeData={this.removeData}
          setDropZonePath={this.setDropZonePath}
          selectNode={this.handleSelectNode}
        />
      </div>
    );
  }

  @Event({
    eventName: 'selectNode',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) selectNode

  handleSelectNode = (data) => {
    this.selectNode.emit(data)
  }

  addData = (path, value) => {
    path.reduce((pre, cur, index) => {
      const { key: _key } = cur;
      if (index === path.length - 1) {
        const data = pre[_key]
        if (isObject(data)) {
          const {key, value: _value} = value;
          data[key] = _value;
        } 
        if (isArray(data)) {
          data.push(value)
        }
        return;
      }

      return pre[_key];
    }, this.data)

    this.data = cloneDeep(this.data);

  }

  editData = (path, value) => {
    const _path = path.map(item => item.key);
    set(this.data, _path, value)
    this.data = cloneDeep(this.data);
  }

  removeData = (path) => {
    console.log('path', path);
    path.reduce((pre, cur, index) => {
      const { key } = cur;
      if (index === path.length - 1) {
        if (isArray(pre)) {
          pre.splice(key, 1)
        }
        if (isObject(pre)) {
          delete pre[key];
        }
        return;
      }

      return pre[key];
    }, this.data)

    this.data = cloneDeep(this.data);
  }

  dragData = (sourcePath, destPath, value) => {

    this.removeData(sourcePath);

    destPath.reduce((pre, cur, index) => {
      const { key: _key } = cur;
      if (index === destPath.length - 1) {
        const data = pre[_key]
        if (isObject(data)) {
        const keys = Object.keys(value);
        const key = keys[0];
        const _value = value[key]
          data[key] = _value;
        } 
        if (isArray(data)) {
          data.push(value)
        }
        return;
      }

      return pre[_key];
    }, this.data)

    this.data = cloneDeep(this.data);
  }

  setDropZonePath = (path) => {
    this.dropZonePath = path
  }
}


