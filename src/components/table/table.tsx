import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'wc-table',
  styleUrls: [
    'table.css',
    '../../global/app.css',
  ],
  shadow: true
})
export class Table {
  @Prop() insertRow: (destIndex: number) => void = noop
  @Prop() delRow: (index: number) => void = noop
  @Prop() insertCol: (destIndex: number) => void = noop
  @Prop() delCol: (index: number) => void = noop
  @Prop() editCell: (rowIndex: number, colIndex: number, value: any) => void = noop

  @Prop() tableData: [][] = [[]];



  handleAddRow = (index) => () => {
    this.insertRow(index + 1);
  }

  handleDelRow = (index) => () => {
    this.delRow(index)
  }

  handleAddCol = (index) => () => {
    this.insertCol(index);
  }

  handleDelCol = (index) => () => {
    this.delCol(index)
  }

  editCeil = (rowIndex: number, colIndex: number) => (e: any) => {
    this.editCell(rowIndex, colIndex, e.target.value);
  }

  get rowNum() {
    return this.tableData.length;
  }

  get colNum() {
    return this.tableData[0].length + 1;
  }

  render() {
    return (
      <table>
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
        {this.tableData.map((item, rowIndex) => (
          <tr>
            {rowIndex === 0
              ? <td class="index">序号</td>
              : <td class="index">{rowIndex}</td>
            }
            
            {item.map((data, colIndex) => (
              <td>
                <div>
                <CellInput
                  value={data}
                  onChange={this.editCeil(rowIndex, colIndex)}
                />
                </div>
              </td>
            ))}
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
          </tr>
        ))}
      </table>
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

const noop = () => {};
