import { useDispatch } from 'react-redux';
import { addComment, changeValue } from '../../redux/slices/comment.slice';
import {
  CommentAddButton,
  CommentInput,
  DetailPostCommentInput,
} from './DetailCommentAdd.style';
import { useSelector } from 'react-redux';

const DetailCommentAdd = () => {
  const dispatch = useDispatch();
  const inPutValue = useSelector((state) => state.inPutValue);

  const handleInputChange = (e) => {
    const action = changeValue({ type: 'inputValue', content: e.target.value });
    dispatch(action);
  };

  const completeChange = () => {
    dispatch(addComment(inPutValue));
    dispatch(changeValue({ type: 'inputValue', content: '' }));
  };

  return (
    <DetailPostCommentInput>
      <CommentInput
        placeholder="댓글 달기"
        type="text"
        value={inPutValue}
        onChange={handleInputChange}
      />
      <CommentAddButton onClick={completeChange}>게시</CommentAddButton>
    </DetailPostCommentInput>
  );
};

export default DetailCommentAdd;
