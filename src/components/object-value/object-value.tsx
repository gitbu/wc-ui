import { Component, Host, h, Prop, State } from '@stencil/core';
import { isObject } from '../../utils/utils';

@Component({
  tag: 'json-object-value',
  styleUrl: 'object-value.css',
  shadow: false
})
export class ObjectValue {
  @State() open: Boolean = false;

  @Prop() jsonKey: String
  @Prop() jsonVal: Object

  get cyst() {
    if (isObject(this.jsonVal)) {
      return ['{', '}']
    }
    return ['[', ']']
  }

  get nodeType() {
    return this.open ? '-' : '+'
  }

  changeContentDisplayState = () => {
    this.open = !this.open;
  }

  render() {
    return (
      <Host>
       <div style={{ padding: '5px 16px' }}>
        <span onClick={this.changeContentDisplayState}>{this.nodeType}</span>
        <span>{`${this.jsonKey}: `}</span>
        <span>{this.cyst[0]}</span>
        {!this.open && (
          <span style={{ display: this.open ? 'none' : 'inline'}}>...</span>
        )}
        {this.open && (
          <wc-json-view data={this.jsonVal} />
        )}
        <div>{this.cyst[1]}</div>
      </div>
      </Host>
    );
  }
}
