import React from 'react'
import { useRecoilValue } from 'recoil';
import { addTitleStateLength,addApprovalStateLength } from '../../states/addTitleState';
import  CreateGrid  from '../../components/AgGrid/CreateGrid';

function SpackGrid() {

  //const addTitle = useRecoilValue(addTitleState)//追加した配列を読み込む
  const addTitleLength = useRecoilValue(addTitleStateLength)//配列の数を読み込む

  const addApprovalLength = useRecoilValue(addApprovalStateLength)
  //AgGrid用にデータを整形

  return (
    <div className='taskField'>
        <h1>AgGridで値を表示</h1>
        <CreateGrid addTitleLength={addTitleLength} addApprovalLength={addApprovalLength}/>
    </div>
  )
}

export default SpackGrid;
