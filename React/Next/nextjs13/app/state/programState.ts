import { atom, selector } from 'recoil'
import { Program } from '../program/program'
import { recoilPersist } from "recoil-persist";

//標準でrecoil-persistというkey名でwebstorageに保存される（オプションで指定可能）
const { persistAtom } = recoilPersist();

//programの状態を管理する
export const programState = atom<Program[]>({
    key: "programState",
    default: [],
    effects_UNSTABLE: [persistAtom]
})

//次のidを算出する
export const nextProgramId = selector<number>({
    key: "nextProgramId",
    get : ({ get }) => {
        //登録されている番組情報を取得
        const calculationProgram:Array<Program> = get(programState);

        if(calculationProgram.length > 0) {
            //取得した番組情報のidの中で一番大きい値を調べて、+1をして返す
            let calculationProgramId = calculationProgram.map((program) => program.id)

            let maxProgramId = Math.max(...calculationProgramId)+1;

            return maxProgramId;
        }
        return 1;
    }
})

