"use client";
import Link from "next/link";
import "../css/create.css";
import { useRecoilState} from 'recoil';
import React, {useReducer} from 'react'
import {programState} from "../state/programState";
import { Program } from '../program/program';

export default function page () {

  const [program,setProgram] = useRecoilState(programState)

  const reducer = (state:Program, action: { type: string; result: any }) :Program => {
    //console.log(action.type)
      switch (action.type){
        //番組名
        case 'SET_NAME':
          return {...state,name:action.result}
        //承認
        case 'SET_APPROVAL':
          return {...state,approval:action.result}
        //公開設定
        case 'SET_SITUATION':
          return {...state,situation:action.result}
        default:
          return state
      }
    }
  
  const lnitialProgram :Program = {
    id: 1,
    name: "",
    approval: false,
    situation: 0
  }
  //入力情報を保持する
  const [createProgram, dispatch] = useReducer(reducer,lnitialProgram)

  const submit = () => {
    //programで更新
    setProgram([createProgram])
    console.log(program)
  }

  console.log(createProgram)

  //TODO:ラジオボタンの初期表示がされない

  return (
    <>
      <h1>登録画面</h1>
      <div className="register-cp">
        <form>
          <div className="form-group">
            <label>番組名</label>
            <input type="text" id="program-name" name="program-name"
              onChange={(e) => dispatch(
                {"type": "SET_NAME", "result": e.target.value}
            )}
            />
          </div>

          <div className="form-group">
            <label>承認</label>
            <div className="radio-group">
              <label>
                <input type="radio" id="approval-1" name="approval" value="true"
                //onChange={() => console.log(!createProgram.approval)}
                onChange={() => dispatch(
                  {"type": "SET_APPROVAL", "result": !createProgram.approval}
              )}
                checked={createProgram.approval}/> 承認
              </label>
              <label>
                <input type="radio" id="approval-2" name="approval" value="false"
                onChange={() => dispatch(
                  {"type": "SET_APPROVAL", "result": !createProgram.approval}
              )}
                checked={!createProgram.approval}/> 未承認
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>公開設定</label>
            <div className="radio-group">
              <label >
                <input type="radio" id="public-setting-1" name="public-setting" value="0"
                onChange={() => dispatch(
                  {"type": "SET_SITUATION", "result": 0}
              )}
                /> 放送中
              </label>
              <label >
                <input type="radio" id="public-setting-2" name="public-setting" value="10"
                onChange={() => dispatch(
                  {"type": "SET_SITUATION", "result": 10}
              )}
              /> 放送予定
              </label>
              <label >
                <input type="radio" id="public-setting-3" name="public-setting" value="20"
                onChange={() => dispatch(
                  {"type": "SET_SITUATION", "result": 20}
              )}
              /> 作成中
              </label>
            </div>
          </div>
          <button className="buttonSubmit" type="submit" onClick={submit}>登録</button>
          <button className="buttonCancel" ><Link href="/">キャンセル</Link></button>
        </form>
      </div>
    </>
  )
}