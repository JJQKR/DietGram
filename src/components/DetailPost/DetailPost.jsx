import DetailPostCommentData from '../DetailPostCommentData/DetailPostCommentData';
import DetailPostData from '../DetailPostData/DetailPostData';
import { DetailPostList } from './DetailPost.style';

const DetailPost = () => {
  return (
    <DetailPostList>
      <DetailPostData />
      <DetailPostCommentData />
    </DetailPostList>
  );
};

export default DetailPost;
