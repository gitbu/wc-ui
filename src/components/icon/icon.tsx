import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-icon',
  styleUrl: 'icon.css',
  shadow: true
})
export class Icon {
  @Prop() type;
  @Prop() size?: string = '16px';
  @Prop() color?: string = '#181818';
  @Prop() cursor

  get svgStyle() {
    let cursor = 'pointer';
    let style: any = {
      fontSize: this.size,
      color: this.color,
    }

    if (typeof this.cursor === 'boolean' && this.cursor === false) {
      cursor = 'default'
    } else if (typeof this.cursor === 'string') {
      cursor = this.cursor;
    }

    style.cursor = cursor;

    return style;
  }

  render() {
    return (
      <Host>
        <svg 
          class="icon"
          id="icon"
          aria-hidden="true"
          style={this.svgStyle}
        >
          <use xlinkHref={`./assets/image/icon.svg#icon-${this.type}`} />
        </svg>
      </Host>
    );
  }

}
