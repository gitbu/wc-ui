import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { isObject, isArray } from '../../utils/utils';

@Component({
  tag: 'wc-json-object-key-value',
  styleUrl: 'json-object-key-value.css',
  shadow: true
})
export class JsonObjectKeyValue {
  cxt: any = '';
  @State() open: Boolean = false;
  @State() toolVisible: string = 'hidden';
  @State() addModalVisible: string = 'none';
  @State() newKey: string = '';

  @Prop() jsonKey: String = '';
  @Prop() jsonVal: Object
  @Prop() path: Array<any>
  @Prop() dropZonePath: string
  @Prop() addAble: boolean = false;
  @Prop() editAble: boolean = false;
  @Prop() addData: Function;
  @Prop() removeData: Function;
  @Prop() dragData: Function;
  @Prop() setDropZonePath: Function;
  @Prop() editData: Function;
  @Prop() selectNode?: Function
  @Prop() removeAble: boolean = false;
  @Prop() canDrag: boolean = false;
  @Prop() collapsed: boolean | string;

  get cyst() {
    if (isObject(this.jsonVal)) {
      return ['{', '}']
    }
    return ['[', ']']
  }

  getIcon() {
    return this.open
      ? <wc-icon type="remove" size="14" color="#66d9ef"/>
      : <wc-icon type="add" size="14" color="#ae81ff"/> 
  }

  get jsonValLen() {
    const keys = Object.keys(this.jsonVal);

    return keys.length;
  }

  get keyStyle() {
    const cursor = 'pointer';

    return { cursor };
  }

  get dropZoneStyle() {
    if (this.isPathEqual(this.path, this.dropZonePath) && this.path.length !== 0) {
      return {

        border: '1px dashed blue',
      }
    }

    return {};
  }

  componentDidLoad() {
    this.changeOpenVal(this.collapsed)
  }

  @Watch('collapsed')
  changeOpen(newVal) {
    this.changeOpenVal(newVal)
  }



  render() {
    return (
      <Host
        onDragStart={this.handleDragStart}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragLeave={this.handleDragLeave}
        onDragEnter={this.handleDragEnter}
        style={this.dropZoneStyle}
      >
        <div 
          draggable={this.canDrag}
          style={{ padding: '5px 16px' }}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <span class="icon-container" onClick={this.changeContentDisplayState}>{this.getIcon()}</span>
          {this.jsonKey && (
            <span style={this.keyStyle} onClick={this.handleSelectNode}>
              {`"${this.jsonKey}": `}
            </span>
          )}
          {this.open && (
            <span class="brace">{this.cyst[0]}</span>
          )}
          {!this.open && (
            <span class="brace">
              {this.cyst[0]}
              ...
              {this.cyst[1]}
            </span>
          )}
          {this.renderJsonValLen()}
          <span style={{ visibility: this.toolVisible }}>
            {this.addAble && (
              <span style={{ marginRight: '4px', cursor: 'pointer' }} onClick={this.handleAdd}>
                <wc-icon type="add" color="#ae81ff" size="14"></wc-icon>
              </span>
            )}
            {this.removeAble && (
              <span style={{cursor: 'pointer'}} onClick={this.handleRemove}>
                <wc-icon type="close" color="#fd971f" size="14"></wc-icon>
              </span>
            )}
          </span>
          {this.open && (
            <wc-json-object-content
              data={this.jsonVal}
              path={this.path}
              dropZonePath={this.dropZonePath}
              removeAble={this.removeAble}
              canDrag={this.canDrag}
              addAble={this.addAble}
              editAble={this.editAble}
              addData={this.addData}
              removeData={this.removeData}
              setDropZonePath={this.setDropZonePath}
              editData={this.editData}
              dragData={this.dragData}
              collapsed={this.collapsed}
              selectNode={this.selectNode}
            />
          )}
          {this.open && (
            <div class="brace">{this.cyst[1]}</div>
          )}
          <div style={{ display: this.addModalVisible }}>
            <div class="modal-mask">
            </div>
            <div class="add-modal">
              <div class="modal-close" onClick={this.handleCloseAddModal}>
                <wc-icon type="close"></wc-icon>
              </div>
              <div style={{ color: 'black'}}>Key name: </div>
              <input value={this.newKey} class="modal-input" type="text" onChange={this.editNewKey} />
              <button class="modal-ok-btn" onClick={this.addKey}>确定</button>
            </div>
          </div>
        </div>
      </Host>
    );
  }

  changeContentDisplayState = () => {
    this.open = !this.open;
  }

  renderJsonValLen() {
    const style = {
      marginLeft: '10px',
      color: '#a59f85'
    }
    return (
      <span style={style}>{this.jsonValLen} items</span>
    );
  }

  handleMouseEnter = () => {
    this.toolVisible = 'visible'
  }

  handleMouseLeave = () => {
    this.toolVisible = 'hidden'
  }

  handleAdd = () => {
    if (isArray(this.jsonVal)) {
      this.addData(this.path, null);
      return;
    }

    if (isObject(this.jsonVal)) {
      this.handleAddModalVisible('block')
    }
  }

  handleAddModalVisible = (visibleStatus) => {
    this.addModalVisible = visibleStatus; 
  }

  handleCloseAddModal = () => {
    this.handleAddModalVisible('none');
  }

  editNewKey = (e) => {
    this.newKey = e.target.value;
  }

  addKey = () => {
    this.handleAddModalVisible('none');

    const val = {key: this.newKey, value: null}

    this.addData(this.path, val);
  }

  handleRemove = () => {
    this.removeData(this.path);
  }

  handleDragStart = (e) => {
    e.stopPropagation();
    e.target.style.width='50%';
    const data = {
      [this.jsonKey as any]: this.jsonVal
    }
    const _data = JSON.stringify(data);
    const _path = JSON.stringify(this.path);
    e.dataTransfer.setData('path', _path);
    e.dataTransfer.setData('data', _data);
  }

  handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  }

  handleDragEnter = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setDropZonePath(this.path);
  }

  handleDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (this.isPathEqual(this.dropZonePath, this.path)) {
      this.setDropZonePath(this.path);
    }
  }

  handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setDropZonePath('');
    const data = e.dataTransfer.getData('data');
    const _data = JSON.parse(data);
    const sourcePath = e.dataTransfer.getData('path');
    const _sourcePath = JSON.parse(sourcePath)
    this.dragData(_sourcePath, this.path, _data)
  }

  changeOpenVal = (collapsed) => {
    if (typeof(collapsed) === 'boolean') {
      if (collapsed === true) {
        this.open = false;

        return;
      }

      if (collapsed === false) {
        this.open = true;

        return;
      }
    }

    const deep = this.path.length;

    if (this.path.length === 0 && deep == 1) {
      this.open = true;
      return;
    }

    if (deep + 1 <= collapsed) { 
      this.open = true;
    } else {
      this.open = false;
    }
  }

  handleSelectNode = (e) => {
    e.stopPropagation();
    this.selectNode(this.path)
  }

  isPathEqual = (sourcePath, destPath) => {
    return JSON.stringify(sourcePath) === JSON.stringify(destPath);
  }
}
