import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { changeValue } from "./redux/slices/form.slice";
import { initDataList } from "./redux/slices/supabase.slice";
import SupabaseFunc from "./supabase/supabase";

function App() {
  const supabase = SupabaseFunc;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.supabase.dataList);
  const formData = useSelector((state) => state.formData.menu);
  // get posts = App에서 useEffect로 받아서 => initialState 할당
  // 이외 db 다루는 함수 사용 후 redux에 payload로 전달
  console.log("posts", posts);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await SupabaseFunc.getPosts();
      const action = initDataList(posts);
      dispatch(action);
      return posts;
    };
    getPosts();
  }, []);

  const onclickHandler = async (e) => {
    e.preventDefault();
    // const data = await supabase.insertPost();

    //deletePost 예시
    // const data = await supabase.deletePost(24);
    // const action = deletePost(data);
    // dispatch(action);

    //updatePost 예시
    // const data = await supabase.updatePost(25);
    // const action = updatePost(data);
    // dispatch(action);
    // console.log("data", data);
  };

  return (
    <div>
      {posts.map((item) => {
        return (
          <>
            <h1>{item.menu}</h1>
            <p>{item.content}</p>
            <p>{item.id}</p>
          </>
        );
      })}
      <button onClick={supabase.signInWithGithub}>로그인</button>
      <button onClick={onclickHandler}>삭제</button>
      <input
        onChange={(e) => {
          const action = changeValue({
            content: e.target.value,
            type: "menu",
          });
          dispatch(action);
          console.log("formData", formData);
        }}
      />
    </div>
  );
}

export default App;
