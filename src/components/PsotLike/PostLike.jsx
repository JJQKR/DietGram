import { useDispatch, useSelector } from 'react-redux';
import { PostLikeBox, PostLikeButton } from './PostLike.style';
import { supabase } from '../../supabase/supabase';
import { useState } from 'react';

const PostLike = () => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(-1);
  const likeList = useSelector((state) => state.posts?.postList);
  const curPost = useSelector((state) => state.posts?.currentPostId);
  const curPostUser = useSelector((state) => state.user?.currentUser);
  console.log(curPost);

  const handleLikeClick = async (id, userId) => {
    const data = await supabase.post.isLike(id, userId);
    console.log(data); // 데이터를 이용하여서 아래 하트만 다르게 표시
    setLike(data?.like.findIndex((item) => item === curPost));
  };
  console.log(like);
  // console.log(curPost);
  // console.log(likeList);
  // console.log(
  //   likeList.filter((postLike) => {
  //     return postLike.id === curPost;
  //   })
  // );

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
