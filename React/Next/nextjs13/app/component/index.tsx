"use client";
import { useRecoilState } from 'recoil'
import { programState } from "../state/programState";
import { getSituation } from "../component/index/getSituation";
import "../css/index.css"

export default function create () {
    //console.log(programState);
    const [program, setProgram] = useRecoilState(programState)

    //console.log(program)

    return (
        <div className="program-list">
            <table className="custom-table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>番組名</th>
                    <th>承認</th>
                    <th>公開設定</th>
                </tr>
            </thead>
            <tbody>
                {program.map((program, index) => (
                <tr key={index}>
                    <td>{program.id}</td>
                    <td>{program.name}</td>
                    <td>{program.approval ? "承認" : "未承認"}</td>
                    <td>{getSituation(program.situation)}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}