import {
  DetailPostComment,
  DetailPostUser,
  DetailPostUserName,
  DetailPostUserImage,
  PostUser,
  DetailPostUserComment,
  DetailCommentUserName,
  DetailUserImage,
  PostGuest,
  DetailPostCommentInput,
  CommentInput,
  PostComment,
  CommentAddButton,
  CommentDate,
  DetailCommentUserBox,
  EditButton,
  PostLikeButton,
  PostLikeBox,
} from './DetailPostCommentData.style';

const DetailPostCommentData = () => {
  return (
    <DetailPostComment>
      <DetailPostUser>
        <DetailPostUserName>
          <DetailPostUserImage
            src="https://m.rainbow-tree.co.kr/web/product/big/rainbowtree81_2117.jpg"
            alt=""
          />
          <PostUser>닉네임</PostUser>
        </DetailPostUserName>
      </DetailPostUser>
      <DetailPostUserComment>
        <DetailCommentUserName>
          <DetailCommentUserBox>
            <DetailUserImage
              src="https://m.rainbow-tree.co.kr/web/product/big/rainbowtree81_2117.jpg"
              alt="유저 사진"
            />
            <PostGuest>
              유저닉네임 <CommentDate>댓글 시간</CommentDate>
              <PostComment>댓글 내용</PostComment>
            </PostGuest>
          </DetailCommentUserBox>
          <EditButton>수정</EditButton>
        </DetailCommentUserName>
      </DetailPostUserComment>
      <PostLikeBox>
        <PostLikeButton>♥︎ ♡</PostLikeButton>
        <span>좋아요 갯수</span>
      </PostLikeBox>
      <DetailPostCommentInput>
        <CommentInput placeholder="댓글 달기" type="text" />
        <CommentAddButton>게시</CommentAddButton>
      </DetailPostCommentInput>
    </DetailPostComment>
  );
};

export default DetailPostCommentData;
