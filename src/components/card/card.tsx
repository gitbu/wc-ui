import { Component, Prop, Listen, h } from '@stencil/core';

enum DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  BOTTOM = 'bottom',
}

@Component({
  tag: 'wc-card',
  shadow: true,
  styleUrls: [
    '../../global/app.css',
    'card.css',
  ]
})
export class Card {
  container: HTMLElement
  mouseStatus: string 
  startX: number
  startY: number
  OFFSET: number = 10
  DIRECTION: DIRECTION 


  @Prop() height: string
  @Prop() width: string 

  componentDidLoad() {
    window.addEventListener('mousedown', this.handleMouseDown)
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  @Listen('dragover', { target: 'body', passive: true })
  

  @Listen('drop', { target: 'body' })
  handleDrop(e) {
    const distanceX = e.pageX - this.startX;
    const distanceY = e.pageY - this.startY;
    this.container.style.transform = `translate(${distanceX + 'px'}, ${distanceY + 'px'})`
  }

  handleMouseMove = (e) => {
    const {
      pageX,
      pageY
    } = e;
    const bodyWidth = document.documentElement.clientWidth;
    const bodyHeight = document.documentElement.clientHeight;
    const {
      left,
      right,
      top,
      bottom
    } = this.container.getBoundingClientRect();

    if (
      pageX > right - this.OFFSET
      && pageX < right + this.OFFSET
    ) {
      this.container.style.cursor = 'e-resize';
    }

    if (this.mouseStatus === 'down') {
      if (this.DIRECTION === DIRECTION.RIGHT) {
        this.container.style.right = bodyWidth - pageX + 'px';
      }
      if (this.DIRECTION === DIRECTION.LEFT) {
        this.container.style.left = pageX + 'px';
      }
      if (this.DIRECTION === DIRECTION.TOP) {
        this.container.style.top = pageY + 'px';
      }
      if (this.DIRECTION === DIRECTION.BOTTOM) {
        this.container.style.bottom = bodyHeight - pageY + 'px';
      }
    }

    if (
      pageX > left +  - this.OFFSET
      && pageX < left + this.OFFSET
    ) {
      this.container.style.cursor = 'w-resize';
    }

    if (
      pageY > top +  - this.OFFSET
      && pageY < top + this.OFFSET
    ) {
      this.container.style.cursor = 'n-resize';
    }

    if (
      pageY > bottom - this.OFFSET
      && pageY < bottom + this.OFFSET
    ) {
      this.container.style.cursor = 's-resize';
    }


  }

  handleMouseDown = (e) => {
    const {
      pageX,
      pageY,
    } = e;
    const {
      left,
      right,
      top,
      bottom,
    } = this.container.getBoundingClientRect();

    this.startX = pageX;
    this.startY = pageY;

    if (
      pageX > right - this.OFFSET
      && pageX < right + this.OFFSET
    ) {
      this.mouseStatus = 'down';
      this.DIRECTION = DIRECTION.RIGHT;
    }

    if (
      pageX > left - this.OFFSET
      && pageX < left + this.OFFSET
    ) {
      this.mouseStatus = 'down';
      this.DIRECTION = DIRECTION.LEFT;
    }

    if (
      pageY > top - this.OFFSET
      && pageY < top + this.OFFSET
    ) {
      this.mouseStatus = 'down';
      this.DIRECTION = DIRECTION.TOP;
    }

    if (
      pageY > bottom - this.OFFSET
      && pageY < bottom + this.OFFSET
    ) {
      this.mouseStatus = 'down';
      this.DIRECTION = DIRECTION.BOTTOM;
    }
  }

  handleMouseUp = () => {
    this.mouseStatus = 'up';
  }

  handleClose = () => {
    this.container.style.display = 'none'
  }

  get boxStyle() {
    return {
      height: this.height,
      width: this.width,
    }
  }


  render() {
    return (
      <div
        id="box"
        ref={el => this.container = el}
        style={this.boxStyle}
      >
        <div
          id="header"
          draggable={true}
        >
          <span>
            标题
          </span>
          <svg onClick={this.handleClose} style={{ float: 'right', cursor: 'pointer' }} viewBox="64 64 896 896" focusable="false" class="" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
        </div>
        <span>ffffffffffffffffffffffffffff</span>
      </div>
    );
  }

}
