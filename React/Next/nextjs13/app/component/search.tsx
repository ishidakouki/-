"use client";
import { useRecoilState } from 'recoil'
import { SearchCondition } from "../state/programState";
import "../css/serach.css";
import React, {useRef} from 'react';

export default function search () {

  const [searchValue, setSearchValue] = useRecoilState(SearchCondition)

  //onchangeの関数を定義して検索条件を作成する
  const setSearch = (e:any) => {
      setSearchValue({
        id: e.target.id === "id"? e.target.value : searchValue.id,
        name: e.target.id === "name"? e.target.value : searchValue.name,
        approval: e.target.id === "approval"? e.target.value : searchValue.approval,
        situation: {
            0: e.target.id === "situation0"? !searchValue.situation[0] : searchValue.situation[0],
            10:e.target.id === "situation10"? !searchValue.situation[10] : searchValue.situation[10],
            20:e.target.id === "situation20"? !searchValue.situation[20] : searchValue.situation[20],
        }
      })
  }

    return (
      <div className="search-cp">
        <table className="search-table">
          <thead>
            <tr>
              <th>id</th>
              <th>番組名</th>
              <th>承認</th>
              <th>公開設定</th>
              <th></th>
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
              <td>
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
                  <input id="situation0" type="checkbox" value="0" />
                  放送中
                </label>
                <label>
                  <input id="situation10" type="checkbox" value="10" />
                  放送予定
                </label>
                <label>
                  <input id="situation20" type="checkbox" value="20" />
                  作成中
                </label>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}