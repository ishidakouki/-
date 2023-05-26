import Link from "next/link";
import "../css/create.css";

export default function page () {
  return (
    <>
      <h1>登録画面</h1>
      <div className="register-cp">
        <form>
          <div className="form-group">
            <label>番組名</label>
            <input type="text" id="program-name" name="program-name" placeholder="番組名"/>
          </div>
          <div className="form-group">
            <label>承認</label>
            <div className="radio-group">
              <label>
                <input type="radio" id="approval-1" name="approval" value="approved" /> 承認
              </label>
              <label>
                <input type="radio" id="approval-2" name="approval" value="unapproved" /> 未承認
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>公開設定</label>
            <div className="radio-group">
              <label >
                <input type="radio" id="public-setting-1" name="public-setting" value="public"/> 放送中
              </label>
              <label >
                <input type="radio" id="public-setting-2" name="public-setting" value="public"/> 放送予定
              </label>
              <label >
                <input type="radio" id="public-setting-3" name="public-setting" value="public"/> 作成中
              </label>
            </div>
          </div>
          <button className="buttonSubmit" type="submit">登録</button>
          <button className="buttonCancel" ><Link href="/">キャンセル</Link></button>
        </form>
      </div>
    </>
  )
}