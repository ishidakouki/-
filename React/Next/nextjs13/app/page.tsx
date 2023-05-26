import Link from "next/link";
import Index from "./component/index";
import Search from "./component/search";
import "./css/layput.css";

export default function create () {

  return (
    <div>
      <h1>番組一覧</h1>
      <button className="create"><Link href="/create">番組を追加</Link></button>
      <Search></Search>
      <Index></Index>
    </div>
  )
}










// type Todo = {
//   title: string;
// };

// //API取得関数
// async function getData() {
//   const res = await fetch("http://localhost:3000/api/todos",{
//     next:{
//       revalidate:10,
//   }});
//   return res.json();
// }

// export default async function Page () {
//   //APIを取得
//   const todos:Todo[]= await getData();

//   return (
//     <>
//       <Link href="/create">登録画面</Link>
//     </>
//   )
// }
