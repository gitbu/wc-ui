import { Component, Prop, Host, h } from '@stencil/core';
const data = {
  a: 1,
  b: {
    m: 2,
    frends: ['a', 'b']
  }
}
@Component({
  tag: 'wc-json-view',
  styleUrl: 'json-view.css',
  shadow: true
})
export class JsonView {
  @Prop() data: Object = data;

  renderObjectComp() {
    const _data = Object.entries(this.data);
    return  (
      <div>
        {_data.map(([key, value]) => {
          if (typeof(value) !== 'object') {
            return (
              <div style={{ padding: '5px 16px' }}>
                <span>{`${key}: `}</span>
                <span>{value}</span>
              </div>
            )
          } else {
            return (
              <json-object-value
                jsonKey={key}
                jsonVal={value}
              />
            )
          }
        })}
      </div>
    );
  }

  render() {
    return (
      <Host>
        {this.renderObjectComp()}
      </Host>
    );
  }

}


