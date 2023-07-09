import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { addTitleState } from '../states/addTitleState';
import { inputTitleState } from '../states/inputTitleState';

const getKey = () => Math.random().toString(32).substring(2);

const InputTask = () => {
  //Recoilの初期値を取得
  const [inputTitle,setInputTitle] = useRecoilState(inputTitleState);

  //Recoilに追加する関数
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback(
    (e: React.onChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
      //console.log(inputTitle)
    },
    [inputTitle]
  )
  const handleClick = () => {
    setAddTitle([...addTitle,{Id: getKey(), Title: inputTitle, Approval: false}])
    setInputTitle('')
    console.log(addTitle)
  }


  return (
    <div className='inputField'>
      <input type="text" className="inputTitle" onChange={onChange} value={inputTitle}/>
      <button type="button" onClick={handleClick}>追加</button>
    </div>
  )
}

export default InputTask
