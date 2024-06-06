import { useDispatch, useSelector } from 'react-redux';
import { insertData } from '../../redux/slices/comments.slice';
import { changeValue } from '../../redux/slices/form.slice';
import { supabase } from '../../supabase/supabase';
import { CommentAddButton, CommentInput, DetailPostCommentInput } from './DetailCommentAdd.style';

const DetailCommentAdd = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const comment = useSelector((state) => state.formData.comment);
  const userInfo = useSelector((state) => state.user.currentUser?.user_metadata);
  const curPostId = useSelector((state) => state.posts.currentPostId);

  // const commentList = useSelector((state) => state.comments);

  const completeChange = async () => {
    if (isLogin === false) return alert('로그인 해주세요.');
    if (!comment.trim()) return alert('내용을 입력해주세요.');
    const data = await supabase.comment.insertComment(curPostId, comment, userInfo.avatarUrl, userInfo.nickName);
    const action = insertData(data);
    dispatch(action);
    dispatch(changeValue({ type: 'comment', content: '' }));
  };

  return (
    <DetailPostCommentInput>
      <CommentInput
        placeholder="댓글 달기"
        type="text"
        value={comment}
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
