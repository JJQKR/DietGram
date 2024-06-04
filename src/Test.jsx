import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "./redux/slices/form.slice";
import { initCommentList, initPostList } from "./redux/slices/supabase.slice";
import { supabase } from "./supabase/supabase";

function Test() {
  const dispatch = useDispatch();
  // 스테이트에 초기값으로 줘야대낭

  const [posts, setPosts] = useState(
    useSelector((state) => state.supabase.postList) ?? []
  );
  const [comments, setComments] = useState(
    useSelector((state) => state.supabase.commentList) ?? []
  );
  // const posts = useSelector((state) => state.supabase.postList) ?? [];
  // const comments = useSelector((state) => state.supabase.commentList) ?? [];
  const formData = useSelector((state) => state.formData.menu);

  useEffect(() => {
    const getPosts = async () => {
      const initPosts = await supabase.post.getPosts();
      setPosts(initPosts);
      const action = initPostList(initPosts);
      dispatch(action);
    };
    const getComments = async () => {
      const initComments = await supabase.comment.getComments();
      setComments(initComments);
      const action = initCommentList(initComments);
      dispatch(action);
    };
    getPosts();
    getComments();
  }, []);

  const onclickHandler = async (e) => {
    e.preventDefault();
    const data = await supabase.post.isLike();
    console.log("data", data);
    // const data = await supabase.post.isLike(1,true)
    // const data = await supabase.comment.updateComment(19);
    // const newComments = comments.map((item) =>
    //   item.id === data.id ? data : item
    // );

    // setComments(newComments);
    // const action = updateData(data);
    // dispatch(action);
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
      {comments.map((item) => {
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
      <button onClick={async (e) => await onclickHandler(e)}>추가</button>
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
