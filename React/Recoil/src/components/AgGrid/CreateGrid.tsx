import React, {useRef,useState} from 'react'
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css';

function CreateGrid(props:{addTitleLength:number,addApprovalLength:number}) {

    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxster", price: 72000}
    ]);

    const [columnDefs] = useState<ColDef[]>([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ]);

  return (
    <div>
        <div className='taskField'>
            <div>{props.addTitleLength}個のタスクがあります</div>
            <div>{props.addApprovalLength}個の承認されています</div>
        </div>
         <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}>
            </AgGridReact>
        </div>
    </div>
  )
}

export default CreateGrid;
