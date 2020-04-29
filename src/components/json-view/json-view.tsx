import { Component, Host, h } from '@stencil/core';
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
  renderObjectComp(data: Object) {
    const _data = Object.entries(data);
    return  (
      <div>
        {_data.map(([key, value]) => {
          if (typeof(value) !== 'object') {
            return (
              <div style={{ padding: '5px 16' }}>
                <span>{`${key}: `}</span>
                <span>{value}</span>
              </div>
            )
          } else {
            return (
              <div style={{ padding: '5px 16px' }}>
                <span>+</span>
                <span>{`${key}: `}</span>
                <span>[</span>
                {this.renderObjectComp(value)}
                <div>]</div>
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
        {this.renderObjectComp(data)}
      </Host>
    );
  }

}
