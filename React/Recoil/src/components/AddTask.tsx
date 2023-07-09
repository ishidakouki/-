import React from 'react'
import { Task } from "../Task.ts/Task";
import { useRecoilValue,useRecoilState } from 'recoil';
import { addTitleState,addTitleStateLength,addApprovalStateLength } from '../states/addTitleState';

function AddTask() {

   //useRecoilValue=読み込み専用
  //const addTitle = useRecoilValue(addTitleState)//追加した配列を読み込む
  const addTitleLength = useRecoilValue(addTitleStateLength)//配列の数を読み込む

  const addApprovalLength = useRecoilValue(addApprovalStateLength)

    //Recoilに追加する関数
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const deleteTask = (taskId: string) => {
    //atomに格納する配列を作成
    const createTitle = addTitle.filter((item) => item.Id !== taskId)
    //クリックしたid以外を格納
    setAddTitle(createTitle)
  }

  const approvalTask = (taskId: string) => {
   //クリックしたidを取得しapprovalの値を反転させる
   const updataTitle = addTitle.map((task:Task) => {
    if(taskId === task.Id) {
      return {
        ...task,
        approval:!task.Approval
      }
    } else {
      return {
        ...task
      }
    }
   })
   setAddTitle(updataTitle)
  }



  return (
    <div className='taskField'>
      <div>{addTitleLength}個のタスクがあります</div>
      <div>{addApprovalLength}個の承認されています</div>
      <ul>
      {addTitle.map((task: Task) => (
          <li key={task.Id}>{task.Title}
            <button onClick={() => deleteTask(task.Id)}>削除</button>
            <button onClick={() => approvalTask(task.Id)}>{task.Approval ? "承認": "未承認"}</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default AddTask;
