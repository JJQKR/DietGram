import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeValue } from "./redux/slices/form.slice";
import { initCommentList, initPostList } from "./redux/slices/posts.slice";
import { supabase } from "./supabase/supabase";

function Test() {
  const dispatch = useDispatch();
  // const selector = useSelector((state) => state);
  // 스테이트에 초기값으로 줘야대낭

  const [posts, setPosts] = useState(
    useSelector((state) => state.supabase.postList) ?? []
  );
  const [comments, setComments] = useState(
    useSelector((state) => state.supabase.commentList) ?? []
  );
  // const posts = useSelector((state) => state.supabase.postList) ?? [];
  // const comments = useSelector((state) => state.supabase.commentList) ?? [];
  // const formData = useSelector((state) => state.formData.menu);

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

    // const data = await supabase.post.isLike(7);
    // const action = setMyLikes(data);
    // dispatch(action);
    // console.log("selector", selector.user.myLikes);
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
        }}
      />
    </div>
  );
}

export default Test;
