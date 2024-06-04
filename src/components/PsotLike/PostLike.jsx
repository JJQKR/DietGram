import { PostLikeBox, PostLikeButton } from './PostLike.style';

const PostLike = () => {
  return (
    <PostLikeBox>
      <PostLikeButton>♥︎ ♡</PostLikeButton>
      <span>좋아요 갯수</span>
    </PostLikeBox>
  );
};

export default PostLike;
