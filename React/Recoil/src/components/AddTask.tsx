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
    const createTitle = addTitle.filter((item) => item.id !== taskId)
    //クリックしたid以外を格納
    setAddTitle(createTitle)
  }

  const approvalTask = (taskId: string) => {
   //クリックしたidを取得しapprovalの値を反転させる
   const updataTitle = addTitle.map((task:Task) => {
    if(taskId === task.id) {
      return {
        ...task,
        approval:!task.approval
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
          <li key={task.id}>{task.title}
            <button onClick={() => deleteTask(task.id)}>削除</button>
            <button onClick={() => approvalTask(task.id)}>{task.approval ? "承認": "未承認"}</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default AddTask;
