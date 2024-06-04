import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "./redux/slices/form.slice";
import { initDataList } from "./redux/slices/supabase.slice";
import { supabase } from "./supabase/supabase";

function Test() {
  supabase;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.supabase.dataList);
  const formData = useSelector((state) => state.formData.menu);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await supabase.post.getPosts();
      const action = initDataList(posts);
      dispatch(action);
      return posts;
    };
    getPosts();
  }, []);

  const onclickHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {posts.map((item) => {
        return (
          <li key={item.id}>
            <h1>{item.menu}</h1>
            <p>{item.content}</p>
            <p>{item.id}</p>
          </li>
        );
      })}
      <button onClick={supabase.signInWithGithub}>로그인</button>
      <button onClick={supabase.signOut}>로그아웃</button>
      <button onClick={onclickHandler}>추가</button>
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

export default Test;
