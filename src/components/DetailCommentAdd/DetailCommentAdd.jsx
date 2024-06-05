import { useDispatch, useSelector } from 'react-redux';
import { insertData } from '../../redux/slices/comments.slice';
import { changeValue } from '../../redux/slices/form.slice';
import { supabase } from '../../supabase/supabase';
import { CommentAddButton, CommentInput, DetailPostCommentInput } from './DetailCommentAdd.style';

const DetailCommentAdd = () => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.formData.comment);
  const userInfo = useSelector((state) => state.user.currentUser?.user_metadata);
  const curPostId = useSelector((state) => state.posts.currentPostId);
  console.log(userInfo);

  // const commentList = useSelector((state) => state.comments);
  // console.log('commentList', commentList);

  const completeChange = async () => {
    const data = await supabase.comment.insertComment(curPostId, comment, userInfo.avatarUrl, userInfo.nickName);
    const action = insertData(data);
    dispatch(action);
  };
  return (
    <DetailPostCommentInput>
      <CommentInput
        placeholder="댓글 달기"
        type="text"
        onChange={(e) => {
          const action = changeValue({ type: 'comment', content: e.target.value });
          dispatch(action);
        }}
      />
      <CommentAddButton onClick={completeChange}>게시</CommentAddButton>
    </DetailPostCommentInput>
  );
};

export default DetailCommentAdd;
