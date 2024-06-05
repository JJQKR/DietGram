
import {
  DetailPostUserComment,
  DetailCommentUserName,
  DetailUserImage,
  PostGuest,
  PostComment,
  CommentDate,
  DetailCommentUserBox,
  CommentButton,
  CommentButtonBox,
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
            <PostComment>댓글 내용댓글</PostComment>
          </PostGuest>
        </DetailCommentUserName>
        <CommentButtonBox>
          <CommentButton>수정</CommentButton>
          <CommentButton>삭제</CommentButton>
        </CommentButtonBox>
      </DetailCommentUserBox>
    </DetailPostUserComment>
  );
};

export default DetailComments;
