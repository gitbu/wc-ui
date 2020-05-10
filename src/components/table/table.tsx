import { Component, Prop, Host, h, State, Watch, Event } from '@stencil/core';

@Component({
  tag: 'wc-table',
  styleUrls: [
    'table.css',
    '../../global/app.css',
  ],
  shadow: true
})
export class Table {
  hostRef: any = '';
  @Prop() tableData;
  @Prop() colAddAble: boolean = true;
  @Prop() rowAddAble: boolean = true;

  @State() data = JSON.parse(this.tableData)

  @Watch('tableData')
  changeData(newVal) {
    this.data = JSON.parse(newVal)
  }

  @Event() insertRow
  @Event() delRow
  @Event() insertCol
  @Event() delCol
  @Event() editCell

  handleAddRow = (index) => () => {
    this.insertRow.emit(index + 1)
    this.hostRef.insertRow(index + 1);
  }

  handleDelRow = (index) => () => {
    this.delRow.emit(index)
    this.hostRef.delRow(index);
  }

  handleAddCol = (index) => () => {
    this.insertCol.emit(index);
    this.hostRef.insertCol(index);
  }

  handleDelCol = (index) => () => {
    this.delCol.emit(index)
    this.hostRef.delCol(index);
  }

  handleEditCell = (rowIndex: number, colIndex: number) => (e: any) => {
    const data = {
      rowIndex,
      colIndex,
      value: e.target.value
    };
    this.editCell.emit(data);
    this.hostRef.editCell(data);
  }

  get rowNum() {
    return this.data.length;
  }

  get colNum() {
    return this.data[0].length + 1;
  }

  render() {
    return (
      <Host ref={ele => this.hostRef = ele}>
      <table>
        {this.colAddAble && (
          <tr>
            {Array.from({length: this.colNum}, () => 0).map((...item) => (
              <td
                style={{...plusStyle, height: '16px' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                  <span onClick={this.handleAddCol(item[1])} style={{ cursor: 'pointer' }}>
                    +
                  </span>
                  {item[1] !== 0 && (
                    <span onClick={this.handleDelCol(item[1] - 1)} style={{ cursor: 'pointer' }}>
                      -
                    </span>
                  )}
                </div>
              </td>
            ))}
          </tr>

        )}
        {this.data.map((item, rowIndex) => (
          <tr>
            {rowIndex === 0
              ? <td class="index">序号</td>
              : <td class="index">{rowIndex}</td>
            }
            
            {item.map((data, colIndex) => (
              <td>
                <div>
                {rowIndex === 0 && !this.colAddAble
                  ? data
                  : (
                    <CellInput
                      value={data}
                      onChange={this.handleEditCell(rowIndex, colIndex)}
                    />
                  )
                }
                </div>
              </td>
            ))}
            {this.rowAddAble && (
              <td
                style={plusStyle}
              >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                  <span onClick={this.handleAddRow(rowIndex)} style={{ cursor: 'pointer' }}>
                    +
                  </span>
                  {rowIndex !== 0 && (
                    <span onClick={this.handleDelRow(rowIndex)} style={{ cursor: 'pointer' }}>
                      -
                    </span>
                  )}
                </div>
              </td>
            )}
          </tr>
        ))}
      </table>
      </Host>
    );
  }
}

const plusStyle = {
  width: '16px',
  padding: '0',
  textAlign: 'center',
};

interface CellInputProps {
  value: string
  onChange: (e: Event) => any
}

const CellInput = (props: CellInputProps) => {
  const {
    value,
    onChange
  } = props;

  return (
    <input
      value={value}
      onChange={onChange}
    />
  )
};