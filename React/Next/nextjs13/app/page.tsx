import Link from "next/link";

type Todo = {
  title: string;
};

//API取得関数
async function getData() {
  const res = await fetch("http://localhost:3000/api/todos",{
    next:{
      revalidate:10,
  }});
  return res.json();
}

export default async function Page () {
  //APIを取得
  const todos:Todo[]= await getData();

  return (
    <>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
      <Link href="/">Home</Link>
    </>
  )
}
