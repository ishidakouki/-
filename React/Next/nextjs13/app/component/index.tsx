"use client";
import { useRecoilState, useRecoilValue } from 'recoil'
import { programState,searchProgram } from "../state/programState";
import { getSituation } from "../component/index/getSituation";
import "../css/index.css"
import Pagination from "../component/pagination/pagination";

export default function index () {
    //console.log(programState);
    const [program, setProgram] = useRecoilState(programState)

    const newProgram = useRecoilValue(searchProgram)
    
    const handleDelete = (id:number) => {
        console.log("削除")
        //programの配列から取得したid以外を返却する
        let deleteProgram = program.filter((list) => list.id !== id);
        setProgram(deleteProgram)
    }

    return (
        <>
            <div className="program-list">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>番組名</th>
                            <th>承認</th>
                            <th>公開設定</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newProgram.map((program, index) => (
                        <tr key={index}>
                            <td>{program.id}</td>
                            <td>{program.name}</td>
                            <td>{program.approval ? "承認" : "未承認"}</td>
                            <td>{getSituation(program.situation)}</td>
                            <td>
                                <button onClick={() => handleDelete(program.id)}>削除</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </>
    )
}