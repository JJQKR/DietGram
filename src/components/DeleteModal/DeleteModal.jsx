import { useDispatch } from 'react-redux';
import { deletePost, selectPost } from '../../redux/slices/posts.slice';
import { supabase } from '../../supabase/supabase';
import * as S from './DeleteModal.styled';

const DeleteModal = ({ setDeleteModalOpen, clickedPostId }) => {
  const dispatch = useDispatch();

  const selectedPostId = selectPost(clickedPostId);

  const handleDeletePost = async (id) => {
    const data = await supabase.post.deleteServerPost(id);
    const action = deletePost(data);
    dispatch(action);
    setDeleteModalOpen(false);
  };

  return (
    <S.Container>
      <S.DeleteTitle>포스트를 삭제하시겠어요?</S.DeleteTitle>
      <S.DeleteMent>포스트가 영구적으로 삭제되며, 복원할 수 없습니다.</S.DeleteMent>
      <S.ButtonBox>
        <S.Button onClick={() => setDeleteModalOpen(false)}>취소</S.Button>
        <S.Button onClick={() => handleDeletePost(clickedPostId)}>삭제</S.Button>
      </S.ButtonBox>
    </S.Container>
  );
};

export default DeleteModal;
