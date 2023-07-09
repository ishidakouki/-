import {atom, selector} from "recoil";
import { Task } from "../Task.ts/Task";//配列の方を読み込む


export const addTitleState = atom<Array<Task>>({
  key: "addTitleState",
  default: [],
})

//投稿した情報を出力
export const addTitleList = selector<Array<Task>>({
  key: "addTitleList",
  get: ({ get }) => {
    const addTitleList: Array<Task> = get(addTitleState);
    return addTitleList;
  }
})

//selector=atomの状態を操作したい場合に利用する
export const addTitleStateLength = selector<number>({
  key:"addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitleState);
    return addTitleNumber?.length || 0;
  }
})


//TODO:承認の数を数える

export const addApprovalStateLength = selector<number>({
  key:"addApprovalLength",
  get: ({ get }) => {
    //追加した配列
    const addApproval: Array<Task> = get(addTitleState);
    //承認されている数
    let approvalLength = 0;

    //
    for (let i = 0; i < addApproval.length; i ++) {
      if(addApproval[i].Approval === true) {
        approvalLength ++
      }
    }
    return approvalLength;
  }
})
