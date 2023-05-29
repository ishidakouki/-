import { atom } from 'recoil'
import { Program } from '../program/program'

//programの状態を管理する
export const programState = atom<Program[]>({
    key: "programState",
    default: []
})


//TODO:次のidを算出する