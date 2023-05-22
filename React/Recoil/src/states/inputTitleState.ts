import {atom} from "recoil";

//状態をRecoilで管理している

export const inputTitleState = atom<string>({
  key: "inputTitleState",
  default : "", //初期値
})
