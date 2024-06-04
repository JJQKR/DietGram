import DetailComments from '../DetailComment/DetailComments';
import DetailCommentAdd from '../DetailCommentAdd/DetailCommentAdd';
import DetailPostUser from '../DetailPostUser/DetailPostUser';
import PostLike from '../PsotLike/PostLike';
import { DetailPostComment } from './DetailPostCommentData.style';

const DetailPostCommentData = () => {
  return (
    <DetailPostComment>
      <DetailPostUser />
      <DetailComments />
      <PostLike />
      <DetailCommentAdd />
    </DetailPostComment>
  );
};

export default DetailPostCommentData;
