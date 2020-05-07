/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface WcCard {
    'height': string;
    'width': string;
  }
  interface WcIcon {
    'color'?: string;
    'cursor': any;
    'size'?: string;
    'type': any;
  }
  interface WcJsonObjectContent {
    'addAble': boolean;
    'addData': Function;
    'canDrag': boolean;
    'collapsed': any;
    'data': Object;
    'dragData': Function;
    'dropZonePath': string;
    'editAble': boolean;
    'editData': Function;
    'path': string;
    'removeAble': boolean;
    'removeData': Function;
    'selectNode': Function;
    'setDropZonePath': Function;
  }
  interface WcJsonObjectKeyValue {
    'addAble': boolean;
    'addData': Function;
    'canDrag': boolean;
    'collapsed': boolean | string;
    'dragData': Function;
    'dropZonePath': string;
    'editAble': boolean;
    'editData': Function;
    'jsonKey': String;
    'jsonVal': Object;
    'path': string;
    'removeAble': boolean;
    'removeData': Function;
    'selectNode'?: Function;
    'setDropZonePath': Function;
  }
  interface WcJsonVariableRow {
    'canDrag': boolean;
    'editAble': boolean;
    'editData': Function;
    'jsonKey': string;
    'jsonVal': any;
    'path': string;
    'removeAble': boolean;
    'removeData': Function;
    'selectNode': Function;
  }
  interface WcJsonView {
    'addAble': boolean;
    'canDrag': boolean;
    'collapsed': boolean | string;
    'datas': string;
    'editAble': boolean;
    'removeAble': boolean;
  }
  interface WcTable {
    'colOperable': boolean;
    'tableData': any;
  }
}

declare global {


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLWcCardElement extends Components.WcCard, HTMLStencilElement {}
  var HTMLWcCardElement: {
    prototype: HTMLWcCardElement;
    new (): HTMLWcCardElement;
  };

  interface HTMLWcIconElement extends Components.WcIcon, HTMLStencilElement {}
  var HTMLWcIconElement: {
    prototype: HTMLWcIconElement;
    new (): HTMLWcIconElement;
  };

  interface HTMLWcJsonObjectContentElement extends Components.WcJsonObjectContent, HTMLStencilElement {}
  var HTMLWcJsonObjectContentElement: {
    prototype: HTMLWcJsonObjectContentElement;
    new (): HTMLWcJsonObjectContentElement;
  };

  interface HTMLWcJsonObjectKeyValueElement extends Components.WcJsonObjectKeyValue, HTMLStencilElement {}
  var HTMLWcJsonObjectKeyValueElement: {
    prototype: HTMLWcJsonObjectKeyValueElement;
    new (): HTMLWcJsonObjectKeyValueElement;
  };

  interface HTMLWcJsonVariableRowElement extends Components.WcJsonVariableRow, HTMLStencilElement {}
  var HTMLWcJsonVariableRowElement: {
    prototype: HTMLWcJsonVariableRowElement;
    new (): HTMLWcJsonVariableRowElement;
  };

  interface HTMLWcJsonViewElement extends Components.WcJsonView, HTMLStencilElement {}
  var HTMLWcJsonViewElement: {
    prototype: HTMLWcJsonViewElement;
    new (): HTMLWcJsonViewElement;
  };

  interface HTMLWcTableElement extends Components.WcTable, HTMLStencilElement {}
  var HTMLWcTableElement: {
    prototype: HTMLWcTableElement;
    new (): HTMLWcTableElement;
  };
  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'wc-card': HTMLWcCardElement;
    'wc-icon': HTMLWcIconElement;
    'wc-json-object-content': HTMLWcJsonObjectContentElement;
    'wc-json-object-key-value': HTMLWcJsonObjectKeyValueElement;
    'wc-json-variable-row': HTMLWcJsonVariableRowElement;
    'wc-json-view': HTMLWcJsonViewElement;
    'wc-table': HTMLWcTableElement;
  }
}

declare namespace LocalJSX {
  interface MyComponent {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }
  interface WcCard {
    'height'?: string;
    'width'?: string;
  }
  interface WcIcon {
    'color'?: string;
    'cursor'?: any;
    'size'?: string;
    'type'?: any;
  }
  interface WcJsonObjectContent {
    'addAble'?: boolean;
    'addData'?: Function;
    'canDrag'?: boolean;
    'collapsed'?: any;
    'data'?: Object;
    'dragData'?: Function;
    'dropZonePath'?: string;
    'editAble'?: boolean;
    'editData'?: Function;
    'path'?: string;
    'removeAble'?: boolean;
    'removeData'?: Function;
    'selectNode'?: Function;
    'setDropZonePath'?: Function;
  }
  interface WcJsonObjectKeyValue {
    'addAble'?: boolean;
    'addData'?: Function;
    'canDrag'?: boolean;
    'collapsed'?: boolean | string;
    'dragData'?: Function;
    'dropZonePath'?: string;
    'editAble'?: boolean;
    'editData'?: Function;
    'jsonKey'?: String;
    'jsonVal'?: Object;
    'path'?: string;
    'removeAble'?: boolean;
    'removeData'?: Function;
    'selectNode'?: Function;
    'setDropZonePath'?: Function;
  }
  interface WcJsonVariableRow {
    'canDrag'?: boolean;
    'editAble'?: boolean;
    'editData'?: Function;
    'jsonKey'?: string;
    'jsonVal'?: any;
    'path'?: string;
    'removeAble'?: boolean;
    'removeData'?: Function;
    'selectNode'?: Function;
  }
  interface WcJsonView {
    'addAble'?: boolean;
    'canDrag'?: boolean;
    'collapsed'?: boolean | string;
    'datas'?: string;
    'editAble'?: boolean;
    'onSelectNode'?: (event: CustomEvent<any>) => void;
    'removeAble'?: boolean;
  }
  interface WcTable {
    'colOperable'?: boolean;
    'onDelCol'?: (event: CustomEvent<any>) => void;
    'onDelRow'?: (event: CustomEvent<any>) => void;
    'onEditCell'?: (event: CustomEvent<any>) => void;
    'onInsertCol'?: (event: CustomEvent<any>) => void;
    'onInsertRow'?: (event: CustomEvent<any>) => void;
    'tableData'?: any;
  }

  interface IntrinsicElements {
    'my-component': MyComponent;
    'wc-card': WcCard;
    'wc-icon': WcIcon;
    'wc-json-object-content': WcJsonObjectContent;
    'wc-json-object-key-value': WcJsonObjectKeyValue;
    'wc-json-variable-row': WcJsonVariableRow;
    'wc-json-view': WcJsonView;
    'wc-table': WcTable;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
      'wc-card': LocalJSX.WcCard & JSXBase.HTMLAttributes<HTMLWcCardElement>;
      'wc-icon': LocalJSX.WcIcon & JSXBase.HTMLAttributes<HTMLWcIconElement>;
      'wc-json-object-content': LocalJSX.WcJsonObjectContent & JSXBase.HTMLAttributes<HTMLWcJsonObjectContentElement>;
      'wc-json-object-key-value': LocalJSX.WcJsonObjectKeyValue & JSXBase.HTMLAttributes<HTMLWcJsonObjectKeyValueElement>;
      'wc-json-variable-row': LocalJSX.WcJsonVariableRow & JSXBase.HTMLAttributes<HTMLWcJsonVariableRowElement>;
      'wc-json-view': LocalJSX.WcJsonView & JSXBase.HTMLAttributes<HTMLWcJsonViewElement>;
      'wc-table': LocalJSX.WcTable & JSXBase.HTMLAttributes<HTMLWcTableElement>;
    }
  }
}


