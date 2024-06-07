import { useDispatch, useSelector } from 'react-redux';
import { deleteData, updateData } from '../../redux/slices/comments.slice';
import { supabase } from '../../supabase/supabase';
import {
  CommentButton,
  CommentButtonBox,
  CommentDate,
  DetailCommentUserBox,
  DetailCommentUserName,
  DetailPostUserComment,
  DetailUserImage,
  PostComment,
  PostGuest
} from './DetailComments.style';

const DetailComments = () => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comments.commentList);
  const curPostId = useSelector((state) => state.posts.currentPostId);
  const currentUser = useSelector((state) => state.user.currentUser);
  const curComments = commentList.filter((comments) => comments.post_id === curPostId);
  const hidden = curComments.map((comment) => currentUser?.id === comment?.user_id);

  const commentEdit = async (id) => {
    const comment = prompt('수정 댓글을 입력해주세요.');
    const data = await supabase.comment.updateComment(id, comment);
    const action = updateData(data);
    dispatch(action);
  };

  const commentDelete = async (id) => {
    const data = await supabase.comment.deleteComment(id);
    const action = deleteData(data);
    dispatch(action);
  };

  return (
    <DetailPostUserComment>
      {curComments.map((comments, idx) => {
        console.log('curComments', curComments);
        return (
          <DetailCommentUserBox key={comments.id}>
            <DetailCommentUserName>
              <DetailUserImage src={comments.avatar_url} alt="유저 사진" />
              <PostGuest>
                {comments?.nickName} <CommentDate>{comments?.created_at.split('T')[0]}</CommentDate>
                <PostComment>{comments?.comment}</PostComment>
              </PostGuest>
            </DetailCommentUserName>
            <CommentButtonBox>
              <CommentButton $hidden={hidden[idx]} onClick={() => commentEdit(comments.id)}>
                수정
              </CommentButton>
              <CommentButton $hidden={hidden[idx]} onClick={() => commentDelete(comments.id)}>
                삭제
              </CommentButton>
            </CommentButtonBox>
          </DetailCommentUserBox>
        );
      })}
    </DetailPostUserComment>
  );
};

export default DetailComments;
