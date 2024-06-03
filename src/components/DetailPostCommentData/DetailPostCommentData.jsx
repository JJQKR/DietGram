import DetailComments from '../\bDetailComment/DetailComments';
import DetailPostUser from '../DetailPostUser/DetailPostUser';
import PostLike from '../PsotLike/PostLike';
import {
  DetailPostComment,
  DetailPostCommentInput,
  CommentInput,
  CommentAddButton,
} from './DetailPostCommentData.style';

const DetailPostCommentData = () => {
  return (
    <DetailPostComment>
      <DetailPostUser />
      <DetailComments />
      <PostLike />
      <DetailPostCommentInput>
        <CommentInput placeholder="댓글 달기" type="text" />
        <CommentAddButton>게시</CommentAddButton>
      </DetailPostCommentInput>
    </DetailPostComment>
  );
};

export default DetailPostCommentData;
