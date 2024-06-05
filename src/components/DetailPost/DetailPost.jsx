import { useParams } from 'react-router-dom';
import DetailPostCommentData from '../DetailPostCommentData/DetailPostCommentData';
import DetailPostData from '../DetailPostData/DetailPostData';
import { DetailPostList } from './DetailPost.style';
import { supabase } from '../../supabase/supabase';
import { useEffect, useState } from 'react';
import { initPostList } from '../../redux/slices/posts.slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/slices/user.slice';

const DetailPost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postList);
  const postUserId = useSelector((state) => state.posts.currentUserId);
  
  useEffect(() => {
    const getUsers = async () => {
      const users = await supabase.post.getUsers();
      const currentUserInfo = users.find((user) => user.user_id === postUserId);
      const action = selectUserInfo(currentUserInfo);
      dispatch(action);
    };
    getUsers();
  }, [postUserId]);

  return (
    <DetailPostList>
      <DetailPostData />
      <DetailPostCommentData />
    </DetailPostList>
  );
};

export default DetailPost;
