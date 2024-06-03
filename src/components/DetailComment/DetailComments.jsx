import {
  DetailPostUserComment,
  DetailCommentUserName,
  DetailUserImage,
  PostGuest,
  PostComment,
  CommentDate,
  DetailCommentUserBox,
  CommentButton,
} from './DetailComments.style';

const DetailComments = () => {
  return (
    <DetailPostUserComment>
      <DetailCommentUserBox>
        <DetailCommentUserName>
          <DetailUserImage
            src="https://m.rainbow-tree.co.kr/web/product/big/rainbowtree81_2117.jpg"
            alt="유저 사진"
          />
          <PostGuest>
            유저닉네임 <CommentDate>댓글 시간</CommentDate>
            <PostComment>댓글 내용</PostComment>
          </PostGuest>
        </DetailCommentUserName>
        <div>
          <CommentButton>수정</CommentButton>
          <CommentButton>삭제</CommentButton>
        </div>
      </DetailCommentUserBox>
    </DetailPostUserComment>
  );
};

export default DetailComments;
