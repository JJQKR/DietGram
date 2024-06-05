import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../../supabase/supabase';
import { PostLikeBox, PostLikeButton } from './PostLike.style';

const PostLike = () => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(-1);
  const curPost = useSelector((state) => state.posts?.currentPostId);
  const curPostUser = useSelector((state) => state.user?.currentUser);

  const handleLikeClick = async (id, userId) => {
    const data = await supabase.post.isLike(id, userId);
    setLike(data?.like.findIndex((item) => item === curPost));
  };

  return (
    <PostLikeBox>
      <PostLikeButton onClick={() => handleLikeClick(curPost, curPostUser?.id)}>
        {like == -1 ? '♡' : '♥︎'}
      </PostLikeButton>
      <span>좋아요 갯수</span>
    </PostLikeBox>
  );
};

export default PostLike;
