import { Component, Host, Prop, h } from '@stencil/core';
import cloneDeep from 'lodash/cloneDeep';
import { isArray, isObject } from '../../utils/utils';

@Component({
  tag: 'wc-json-object-content',
  styleUrl: 'json-object-content.css',
  shadow: true
})
export class JsonObjectContent {
  @Prop() data: Object;
  @Prop() addAble: boolean;
  @Prop() editAble: boolean;
  @Prop() removeAble: boolean;
  @Prop() canDrag: boolean;
  @Prop() path: Array<any>;
  @Prop() dropZonePath: string;
  @Prop() collapsed;
  @Prop() addData: Function;
  @Prop() editData: Function;
  @Prop() removeData: Function;
  @Prop() dragData: Function;
  @Prop() setDropZonePath: Function;
  @Prop() selectNode: Function

  getPath = (curKey, value) => {
    const path = cloneDeep(this.path)
    if (isArray(value)) {
      path.push({key: curKey, type: 'Array'});

      return path;
    }

    if (isObject(value)) {
      path.push({key: curKey, type: 'Object'});

      return path;
    }

    path.push({key: curKey, type: typeof(value)});

    return path;
  }


  renderObjectCotent() {
    const _data = Object.entries(this.data);
    return  (
      <div>
        {_data.map(([key, value]) => {
          if (typeof(value) !== 'object' || value === null) {
            return (
              <wc-json-variable-row
                key={key}
                jsonKey={key}
                jsonVal={value}
                path={this.getPath(key, value)}
                editData={this.editData}
                removeData={this.removeData}
                selectNode={this.selectNode} 
                removeAble={this.removeAble}
                canDrag={this.canDrag}
                editAble={this.editAble}
              />
            )
          } else {
            return (
              <div style={{  borderLeft: '1px solid rgb(73, 72, 62)'}}>
                <div>
                  <wc-json-object-key-value
                    key={key}
                    jsonKey={key}
                    jsonVal={value}
                    path={this.getPath(key, value)}
                    dropZonePath={this.dropZonePath}
                    removeAble={this.removeAble}
                    canDrag={this.canDrag}
                    addAble={this.addAble}
                    editAble={this.editAble}
                    collapsed={this.collapsed}
                    addData={this.addData}
                    dragData={this.dragData}
                    editData={this.editData}
                    removeData={this.removeData}
                    setDropZonePath={this.setDropZonePath}
                    selectNode={this.selectNode}
                  />
                </div>
                <div style={{ height: '6px'}} />
              </div>
            )
          }
        })}
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.renderObjectCotent()}
      </Host>
    );
  }
}
