import "../css/serach.css";

export default function create () {

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
          <select id="search-situation">
            <option value="">すべて</option>
            <option value="option1">降順</option>
            <option value="option2">昇順</option>
          </select>
        </td>
        <td>
          <input type="text" id="search-program-name" placeholder="番組名" />
        </td>
        <td>
          <label>
            <input type="radio" name="approval" value="all" />
            すべて
          </label>
          <label>
            <input type="radio" name="approval" value="approved" />
            承認
          </label>
          <label>
            <input type="radio" name="approval" value="unapproved" />
            未承認
          </label>
        </td>
        <td>
          <label>
            <input type="checkbox" name="situation" value="option1" />
            放送中
          </label>
          <label>
            <input type="checkbox" name="situation" value="option2" />
            放送予定
          </label>
          <label>
            <input type="checkbox" name="situation" value="option3" />
            作成中
          </label>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    )
}