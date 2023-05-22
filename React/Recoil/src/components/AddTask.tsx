import React from 'react'
import { Task } from "../Task.ts/Task";
import { useRecoilValue } from 'recoil';
import { addTitleState,addTitleStateLength } from '../states/addTitleState';

function AddTask() {

  const addTitle = useRecoilValue(addTitleState)
  const addTitleLength = useRecoilValue(addTitleStateLength)

  return (
    <div className='taskField'>
      <div>{addTitleLength}個のタスクがあります</div>
      <ul>
      {addTitle.map((task: Task) => (
          <li key={task.id}>{task.title}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default AddTask;
