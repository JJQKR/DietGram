import { useDispatch, useSelector } from 'react-redux';
import { PostLikeBox, PostLikeButton } from './PostLike.style';
import { supabase } from '../../supabase/supabase';
import { useState } from 'react';

const PostLike = () => {
  const [like, setLike] = useState(-1);
  const currentUserLogin = useSelector((state) => state.user.isLogin);
  const likeList = useSelector((state) => state.posts?.postList);
  const curPost = useSelector((state) => state.posts?.currentPostId);
  const curPostUser = useSelector((state) => state.user?.currentUser);

  const handleLikeClick = async (id, userId) => {
    if (currentUserLogin === false) return alert('로그인을 해주세요.');
    const data = await supabase.post.isLike(id, userId);
    console.log(data); // 데이터를 이용하여서 아래 하트만 다르게 표시
    setLike(data?.like.findIndex((item) => item === curPost));
  };

  return (
    <PostLikeBox>
      <PostLikeButton onClick={() => handleLikeClick(curPost, curPostUser?.id)}>
        {like === -1 ? '♡' : '♥︎'}
      </PostLikeButton>
      <span>좋아요 갯수</span>
    </PostLikeBox>
  );
};

export default PostLike;
