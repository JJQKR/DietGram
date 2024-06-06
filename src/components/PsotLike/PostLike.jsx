import { useDispatch, useSelector } from 'react-redux';
import { clickedPostLikes } from '../../redux/slices/posts.slice';
import { setMyLikes } from '../../redux/slices/user.slice';
import { supabase } from '../../supabase/supabase';
import { PostLikeBox, PostLikeButton } from './PostLike.style';

const PostLike = () => {
  const dispatch = useDispatch();
  const curPost = useSelector((state) => state.posts?.currentPostId);
  const curPostUser = useSelector((state) => state.user?.currentUser);
  const myLikes = useSelector((state) => state.user.myLikes);
  const likes = useSelector((state) => state.posts.likes);

  const handleLikeClick = async (id, userId) => {
    // if (currentUserLogin === false) return alert('로그인을 해주세요.');
    const data = await supabase.post.isLike(id, userId);
    const clickLikeAction = clickedPostLikes(data.like.includes(curPost));
    const action = setMyLikes(data);
    dispatch(clickLikeAction);
    dispatch(action);
    const instantLike = data.like.includes(curPost) ? likes + 1 : likes - 1;
    await supabase.post.updateServerPostLike(id, instantLike);
  };

  return (
    <PostLikeBox>
      <PostLikeButton onClick={() => handleLikeClick(curPost, curPostUser?.id)}>
        {myLikes.includes(curPost) ? '♥︎' : '♡'}
      </PostLikeButton>
      <span>{likes}</span>
    </PostLikeBox>
  );
};

export default PostLike;
