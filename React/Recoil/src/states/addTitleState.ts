import {atom, selector} from "recoil";
import { Task } from "../Task.ts/Task";//配列の方を読み込む


export const addTitleState = atom<Array<Task>>({
  key: "addTitleState",
  default: [],
})

//selector=atomの状態を操作したい場合に利用する
export const addTitleStateLength = selector<number>({
  key:"addTitleStateLength",
  get: ({ get }) => {
    const addTitleNumber: Array<Task> = get(addTitleState);
    return addTitleNumber?.length || 0;
  }
})
