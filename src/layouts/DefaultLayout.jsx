import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { initPostList } from '../redux/slices/posts.slice';
import { checkLogin, setTotalUserInfo } from '../redux/slices/user.slice';
import { supabase } from '../supabase/supabase';
import { initCommentList } from '../redux/slices/comments.slice';

function DefaultLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const initUsersData = async () => {
      const users = await supabase.post.getUsers();
      const action = setTotalUserInfo(users);
      dispatch(action);
    };
    const initCommentsData = async () => {
      const comments = await supabase.comment.getComments();
      const action = initCommentList(comments);
      dispatch(action);
    };
    const checkSignInStatus = async () => {
      const isSignIn = await supabase.login.checkSignIn();
      const action = checkLogin(isSignIn);
      dispatch(action);
    };
    const initPostData = async () => {
      const data = await supabase.post.getPosts();
      const action = initPostList(data);
      dispatch(action);
    };
    initUsersData();
    initPostData();
    checkSignInStatus();
    initCommentsData();
  }, []);

  return (
    <div id="default-layout">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
