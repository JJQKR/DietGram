import { useSelector } from 'react-redux';
import {
  DetailPostUserComment,
  DetailCommentUserName,
  DetailUserImage,
  PostGuest,
  PostComment,
  CommentDate,
  DetailCommentUserBox,
  CommentButton,
  CommentButtonBox
} from './DetailComments.style';
import { supabase } from '../../supabase/supabase';

const DetailComments = () => {
  const commentList = useSelector((state) => state.comments.commentList);
  const curPostId = useSelector((state) => state.posts.currentPostId);

  const curComments = commentList.filter((comments) => comments.post_id === curPostId);
  console.log(curComments);

  const commentEdit = async () => {
    const data = await supabase.comment.updateComment(id, comment);
    console.log(data);
  };

  return (
    <DetailPostUserComment>
      {curComments.map((comments) => {
        return (
          <DetailCommentUserBox key={comments.id}>
            <DetailCommentUserName>
              <DetailUserImage
                src="https://m.rainbow-tree.co.kr/web/product/big/rainbowtree81_2117.jpg"
                alt="유저 사진"
              />
              <PostGuest>
                {comments?.nickName} <CommentDate>{comments?.created_at.split('T')[0]}</CommentDate>
                <PostComment>{comments?.comment}</PostComment>
              </PostGuest>
            </DetailCommentUserName>
            <CommentButtonBox>
              <CommentButton>수정</CommentButton>
              <CommentButton>삭제</CommentButton>
            </CommentButtonBox>
          </DetailCommentUserBox>
        );
      })}
    </DetailPostUserComment>
  );
};

export default DetailComments;
