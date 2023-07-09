import React, {useEffect,useState} from 'react'
import { useRecoilValue } from 'recoil';
import { ColDef } from 'ag-grid-community';
import { addTitleList } from '../../states/addTitleState';
import  CreateGrid  from './CreateGrid';
import { UpdateRowData } from "../../Task.ts/Task";//配列の方を読み込む

function SparkGrid() {

  const addTitleListValue = useRecoilValue(addTitleList)

  const [rowData, setRowData] = useState<UpdateRowData[]>([]);

  const [columnDefs] = useState<ColDef[]>([
    { field: 'Id' },
    { field: 'Title' },
    { field: 'Approval' }
  ]);

  const CreateApproval = (Approval:boolean):string => {
    if(Approval) {
      return "承認"
    }
    return "未承認"
  }

  useEffect(() => {
    const updateRowData = addTitleListValue.map((item) => {
      return {
        ...item,
        Approval:CreateApproval(item.Approval)
      }
    })
    setRowData(updateRowData)
  },[addTitleListValue])

  return (
    <div className='taskField'>
        <h1>AgGridで値を表示</h1>
        <CreateGrid rowData={rowData} columnDefs={columnDefs}/>
    </div>
  )
}

export default SparkGrid;
