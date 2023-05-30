"use client";
import { useRecoilState } from 'recoil'
import { SearchCondition } from "../state/programState";
import "../css/serach.css";
import React, {useRef, useEffect} from 'react';

export default function search () {

  const [searchValue, setSearchValue] = useRecoilState(SearchCondition)

  console.log(searchValue)
  //TODO:recoilのオブジェクトに整形しrecoilに渡す
  
  const nameEl = useRef(null)


  //onchangeの関数を定義して検索条件を作成する
  const setSearch = (e:any) => {

    console.log("値変更")
      setSearchValue(
    {
      id: "default",
      name: "番組",
      approval: "all",
      situation: {
          0: false,
          10: false,
          20: false,
      }
  })
    // console.log(e.target.value)
    // console.log(e.target.id)

    // console.log(nameEl.current)
    // const value = {
    //   "id": e.target.id === "id" ? e.target.value : "",
    //   "name": e.target.id === "name" ? e.target.value : "",
    //   "approval":e.target.id === "approval" ? e.target.value : "",
    //   "situation":e.target.id === "situation" ? e.target.value : ""
    // }

    //console.log(value)

  }
  //作成した検索条件をatomに渡す

    return (
      <div className="search-cp">
        <table className="search-table">
          <thead>
            <tr>
              <th>id</th>
              <th>番組名</th>
              <th>承認</th>
              <th>公開設定</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <select id="id" onChange={(e) => setSearch(e)}>
                  <option value="default">通常</option>
                  <option value="asc">降順</option>
                  <option value="desc">昇順</option>
                </select>
              </td>
              <td ref={nameEl}>
                <input type="text" id="name" onChange={(e) => setSearch(e)}/>
              </td>
              <td onChange={(e) => setSearch(e)}>
                <label>
                  <input type="radio" id="approval" name="approval" value="all" defaultChecked/>
                  すべて
                </label>
                <label>
                  <input type="radio" id="approval" name="approval" value="true" />
                  承認
                </label>
                <label>
                  <input type="radio" id="approval" name="approval" value="false" />
                  未承認
                </label>
              </td>
              <td onChange={(e) => setSearch(e)}>
                <label>
                  <input id="situation" type="checkbox" value="0" />
                  放送中
                </label>
                <label>
                  <input id="situation" type="checkbox" value="10" />
                  放送予定
                </label>
                <label>
                  <input id="situation" type="checkbox" value="20" />
                  作成中
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}