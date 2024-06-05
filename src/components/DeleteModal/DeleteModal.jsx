import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../redux/slices/posts.slice';
import { supabase } from '../../supabase/supabase';
import * as S from './DeleteModal.styled';

const DeleteModal = ({ setDeleteModalOpen }) => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.posts);

  const handleDeletePost = async (id) => {
    const data = await supabase.post.deleteServerPost(id);

    const action = deletePost(data);
    dispatch(action);
    console.log(selector.postList);
    setDeleteModalOpen(false);
  };

  return (
    <S.Container>
      <S.DeleteTitle>포스트를 삭제하시겠어요?</S.DeleteTitle>
      <S.DeleteMent>포스트가 영구적으로 삭제되며, 복원할 수 없습니다.</S.DeleteMent>
      <S.ButtonBox>
        <S.Button onClick={() => setDeleteModalOpen(false)}>취소</S.Button>
        <S.Button onClick={handleDeletePost}>삭제</S.Button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default DeleteModal;
