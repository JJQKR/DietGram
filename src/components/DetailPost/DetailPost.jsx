import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initPostLikes } from '../../redux/slices/posts.slice';
import { selectUserInfo } from '../../redux/slices/user.slice';
import DetailPostCommentData from '../DetailPostCommentData/DetailPostCommentData';
import DetailPostData from '../DetailPostData/DetailPostData';
import { DetailPostList } from './DetailPost.style';

const DetailPost = () => {
  const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.user?.totalUserInfo);
  const postUserId = useSelector((state) => state.posts.currentUserId);
  const postId = useSelector((state) => state.posts.currentPostId);
  const posts = useSelector((state) => state.posts.postList);

  useEffect(() => {
    const curPost = posts.find((item) => item.id === postId);
    const action = initPostLikes(curPost?.like);
    dispatch(action);
  }, []);
  useEffect(() => {
    const getCurrentUserId = async () => {
      console.log('stotalUsers', totalUsers);
      const currentUserInfo = totalUsers.data.find((user) => user.user_id === postUserId);
      const action = selectUserInfo(currentUserInfo);
      dispatch(action);
    };
    getCurrentUserId();
  }, [totalUsers]);

  return (
    <DetailPostList>
      <DetailPostData />
      <DetailPostCommentData />
    </DetailPostList>
  );
};

export default DetailPost;
