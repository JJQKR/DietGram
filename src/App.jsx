import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { deletePost, initDataList } from "./redux/slices/supabase.slice";
import Supabase from "./supabase/supabase";

function App() {
  const supabase = Supabase;
  const dispatch = useDispatch();

  // get posts = App에서 useEffect로 받아서 => initialState 할당
  // 이외 db 다루는 함수 사용 후 redux에 payload로 전달

  useEffect(() => {
    const getPosts = async () => {
      const posts = await Supabase.getPosts();
      const action = initDataList(posts);
      dispatch(action);
      return posts;
    };
    getPosts();
  }, []);

  const onclickHandler = async (e) => {
    e.preventDefault();
    // const data = await supabase.insertPost();
    const data = await supabase.deletePost(24);
    const action = deletePost(data);
    dispatch(action);
    console.log("data", data);
  };

  return (
    <div>
      <button onClick={supabase.signInWithGithub}>로그인</button>
      <button onClick={onclickHandler}>삭제</button>
    </div>
  );
}

export default App;
