import {
  CommentAddButton,
  CommentInput,
  DetailPostCommentInput,
} from './DetailCommentAdd.style';

const DetailCommentAdd = () => {
  return (
    <DetailPostCommentInput>
      <CommentInput placeholder="댓글 달기" type="text" />
      <CommentAddButton>게시</CommentAddButton>
    </DetailPostCommentInput>
  );
};

export default DetailCommentAdd;
