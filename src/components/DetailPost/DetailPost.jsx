import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../redux/slices/user.slice';
import DetailPostCommentData from '../DetailPostCommentData/DetailPostCommentData';
import DetailPostData from '../DetailPostData/DetailPostData';
import { DetailPostList } from './DetailPost.style';

const DetailPost = () => {
  const dispatch = useDispatch();
  const totalUsers = useSelector((state) => state.user.totalUserInfo);
  const postUserId = useSelector((state) => state.posts.currentUserId);

  useEffect(() => {
    const getCurrentUserId = async () => {
      console.log('totalUsers', totalUsers);
      const currentUserInfo = totalUsers.find((user) => user.user_id === postUserId);
      const action = selectUserInfo(currentUserInfo);
      dispatch(action);
    };
    getCurrentUserId();
  }, []);

  return (
    <DetailPostList>
      <DetailPostData />
      <DetailPostCommentData />
    </DetailPostList>
  );
};

export default DetailPost;
