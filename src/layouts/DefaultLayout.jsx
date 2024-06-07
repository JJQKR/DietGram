import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { initCommentList } from '../redux/slices/comments.slice';
import { initPostList } from '../redux/slices/posts.slice';
import { checkLogin, setMyLikes, setTotalUserInfo } from '../redux/slices/user.slice';
import { supabase } from '../supabase/supabase';

function DefaultLayout() {
  const dispatch = useDispatch();
  const curUserInfo = useSelector((state) => state.user.currentUser);

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

    const initPostData = async () => {
      const data = await supabase.post.getPosts();
      const action = initPostList(data);
      dispatch(action);
    };

    initUsersData();
    initPostData();
    initCommentsData();
  }, []);
  useEffect(() => {
    const checkSignInStatus = async () => {
      const isSignIn = await supabase.login.checkSignIn();
      const action = checkLogin(isSignIn);
      dispatch(action);
    };
    const initMyLikes = async () => {
      const { data } = await supabase.post.getUsers();
      const filteredData = data.filter((item) => item?.user_id === curUserInfo?.id);
      const action = setMyLikes(filteredData[0]);
      dispatch(action);
    };
    initMyLikes();
    checkSignInStatus();
  }, [curUserInfo]);
  return (
    <div id="default-layout">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
