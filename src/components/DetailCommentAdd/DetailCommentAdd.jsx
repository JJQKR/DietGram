import { useDispatch } from "react-redux";
import { changeValue } from "../../redux/slices/form.slice";
import {
  CommentAddButton,
  CommentInput,
  DetailPostCommentInput,
} from "./DetailCommentAdd.style";

const DetailCommentAdd = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const action = changeValue({ type: "menu", content: e.target.value });
    dispatch(action);
  };

  // const completeChange = () => {
  //   const action = initFormData();
  //   dispatch(action);
  // };

  return (
    <DetailPostCommentInput>
      <CommentInput
        placeholder="댓글 달기"
        type="text"
        onChange={handleInputChange}
      />
      <CommentAddButton>게시</CommentAddButton>
    </DetailPostCommentInput>
  );
};

export default DetailCommentAdd;
