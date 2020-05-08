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
    const nodes = path.split('.');
    nodes.reduce((pre, cur, index) => {
      if (index === nodes.length - 1) {
        const data = pre[cur]
        if (isObject(data)) {
          const {key, value: _value} = value;
          data[key] = _value;
        } 
        if (isArray(data)) {
          data.push(value)
        }
        return;
      }

      return pre[cur];
    }, this.data)

    this.data = cloneDeep(this.data);

  }

  editData = (path, value) => {
    set(this.data, path, value)
    this.data = cloneDeep(this.data);
  }

  removeData = (path) => {
    const nodes = path.split('.');
    nodes.reduce((pre, cur, index) => {
      if (index === nodes.length - 1) {
        delete pre[cur];
        return;
      }

      return pre[cur];
    }, this.data)

    this.data = cloneDeep(this.data);
  }

  dragData = (sourcePath, destPath, value) => {
    this.removeData(sourcePath);

    const nodes = destPath.split('.');
    nodes.reduce((pre, cur, index) => {
      if (index === nodes.length - 1) {
        const data = pre[cur]
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

      return pre[cur];
    }, this.data)

    this.data = cloneDeep(this.data);
  }

  setDropZonePath = (path) => {
    this.dropZonePath = path
  }

  render() {
    console.log(this.data);
    return (
      <div class="container">
        <wc-json-object-key-value
          path=''
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

}


