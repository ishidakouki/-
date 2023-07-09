import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { UpdateRowData } from "../../Task.ts/Task";//配列の方を読み込む

function CreateGrid(props:{rowData:UpdateRowData[],columnDefs:ColDef[]}) {

    console.log(props.rowData)

  return (
    <div className="ag-theme-alpine" style={{height: 300, width: 600}}>
        <AgGridReact
            rowData={props.rowData}
            columnDefs={props.columnDefs}>
        </AgGridReact>
    </div>
  )
}

export default CreateGrid;
