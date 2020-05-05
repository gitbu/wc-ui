import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'wc-json-object-content',
  styleUrl: 'json-object-content.css',
  shadow: true
})
export class JsonObjectContent {
  @Prop() data: Object;
  @Prop() addData: Function;
  @Prop() editData: Function;
  @Prop() removeData: Function;
  @Prop() dragData: Function;
  @Prop() setDropZonePath: Function;
  @Prop() addAble: boolean;
  @Prop() editAble: boolean;
  @Prop() removeAble: boolean;
  @Prop() canDrag: boolean;
  @Prop() path: string = '';
  @Prop() dropZonePath: string;
  @Prop() collapsed;

  getPath = (curKey) => {
    const prefix = this.path ? `${this.path}.` : '';

    return prefix +   curKey;
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
                path={this.getPath(key)}
                editData={this.editData}
                removeData={this.removeData}
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
                    path={this.path}
                    dropZonePath={this.dropZonePath}
                    removeAble={this.removeAble}
                    canDrag={this.canDrag}
                    addAble={this.addAble}
                    addData={this.addData}
                    dragData={this.dragData}
                    editData={this.editData}
                    removeData={this.removeData}
                    setDropZonePath={this.setDropZonePath}
                    editAble={this.editAble}
                    collapsed={this.collapsed}
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
