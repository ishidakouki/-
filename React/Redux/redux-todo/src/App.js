import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { addPost,deletePost } from "./features/Post.ts"
import { useState } from 'react';

function App() {
  const [list,setList] = useState({name: "", content: ""});

  const postList = useSelector((state) => state.posts.value);
  //console.log(postList)


  const dispatch = useDispatch();

  const handleClick = () => {
    //console.log(list.name,list.content,postList.length)
    dispatch(
      addPost({
        id: postList.length,
        name: list.name,
        content: list.content,
      })
    )
    setList({name: "", content: ""})
  }
  return (
    <div className="App">
      <div><h1>掲示板</h1></div>
      <div className='addPost'>
        <input type="text" placeholder='お名前' value={list.name} onChange={(e) => setList({...list,name: e.target.value})}/>
        <input type="text" placeholder='投稿内容'  value={list.content} onChange={(e) => setList({...list,content:e.target.value})}/>
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className='displayPosts'>
        {postList.map((post) => (
          <div key={post.id} className='post'>
            <h1>{post.name}</h1>
            <h1 className='postContent'>{post.content}</h1>
            <button onClick={() => dispatch(deletePost({id: post.id}))}>削除</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
