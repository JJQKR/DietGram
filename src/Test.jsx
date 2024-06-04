import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "./redux/slices/form.slice";
import {
  initCommentList,
  initPostList,
  insertData,
} from "./redux/slices/supabase.slice";
import { supabase } from "./supabase/supabase";

function Test() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.supabase.postList) ?? [];
  const comments = useSelector((state) => state.supabase.commentList) ?? [];
  const formData = useSelector((state) => state.formData.menu);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await supabase.post.getPosts();
      const action = initPostList(posts);
      dispatch(action);
      return posts;
    };
    const getComments = async () => {
      const comments = await supabase.comment.getComments();
      const action = initCommentList(comments);
      dispatch(action);
      return comments;
    };
    getPosts();
    getComments();
  }, []);

  const onclickHandler = async (e) => {
    e.preventDefault();

    const data = await supabase.comment.updateComment(6);
    console.log("data", data);
    const action = insertData(data);
    dispatch(action);
  };

  return (
    <div>
      {posts &&
        posts.map((item) => {
          return (
            <li key={item.id}>
              <h1>{item.menu}</h1>
              <p>{item.content}</p>
              <p>{item.id}</p>
            </li>
          );
        })}
      {comments &&
        comments.map((item) => {
          return (
            <li key={item.id}>
              <h5>{item.comment}</h5>
              <p>{item.id}</p>
            </li>
          );
        })}
      <button onClick={async () => await supabase.login.signInWithGithub()}>
        로그인
      </button>
      <button onClick={async () => await supabase.login.signOut()}>
        로그아웃
      </button>
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
