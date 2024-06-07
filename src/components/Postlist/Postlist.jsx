import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { Background } from '../../components/DeleteModal/DeleteModal.styled';
import { selectPost, selectUser } from '../../redux/slices/posts.slice';
import * as S from './Postlist.styled';

const Postlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const modalBackground = useRef(null);

  const rawData = useSelector((state) => state.posts.postList);
  const userId = useSelector((state) => state.user.currentUser?.id); // 로그인 한 계정의 id
  const currentUserId = useSelector((state) => state.posts.currentUserId); // 현재 postlist에서 뿌려주는 post의 유저 id
  const myPostList = rawData.filter((data) => data.user_id === currentUserId);
  const totalUser = useSelector((state) => state.user.totalUserInfo.data);

  const [clickedPostId, setClickedPostId] = useState('');

  const currentUserInfo = totalUser.find((user) => user.user_id === currentUserId);

  const handleFoodFileClick = (id) => {
    dispatch(selectPost(id));
    navigate(`/detail/${id}`);
  };

  const handleDeleteButtonClick = (id) => {
    setClickedPostId(id);
    const action = selectPost(id);
    dispatch(action);
    setDeleteModalOpen(true);
  };
  const handleEditButtonClick = (id) => {
    const action = selectPost(id);
    dispatch(action);
    navigate(`/edit/${id}`);
  };

  const showPosts = (postlist) => {
    {
      return postlist.map((data) => {
        return (
          <>
            <S.Post key={data.id}>
              <S.ProfileBox>
                <S.Nickname
                  onClick={() => {
                    const action = selectUser(data.user_id);
                    dispatch(action);
                  }}
                >
                  {currentUserInfo?.nickName}
                </S.Nickname>
              </S.ProfileBox>
              <S.ContextBox>
                <S.FoodFile src={data.img_url} onClick={() => handleFoodFileClick(data.id)} />
                <S.TopBox>
                  <S.Fooditem>{data.menu}</S.Fooditem>
                  <S.FoodAverage>★ {data.raiting}</S.FoodAverage>
                </S.TopBox>
                <S.MiddleBox>
                  <S.FoodKcal>{data.kcal} kcal </S.FoodKcal>
                  <S.ButtonBox>
                    <S.Button dataUserId={data.user_id} userId={userId} onClick={() => handleEditButtonClick(data.id)}>
                      수정
                    </S.Button>
                    <S.Button
                      dataUserId={data.user_id}
                      userId={userId}
                      onClick={() => handleDeleteButtonClick(data.id)}
                    >
                      삭제
                    </S.Button>
                  </S.ButtonBox>
                </S.MiddleBox>
              </S.ContextBox>
            </S.Post>
          </>
        );
      });
    }
  };

  return (
    <>
      <S.PostsNumberBox>
        <S.PostsNumber>
          {currentUserInfo?.nickName} 님의 포스트 {myPostList?.length}건
        </S.PostsNumber>
      </S.PostsNumberBox>
      <S.Boxes>
        {showPosts(myPostList)}
        {deleteModalOpen && (
          <Background
            ref={modalBackground}
            onClick={(e) => {
              if (e.target === modalBackground.current) {
                setDeleteModalOpen(false);
              }
            }}
          >
            <DeleteModal setDeleteModalOpen={setDeleteModalOpen} clickedPostId={clickedPostId} />
          </Background>
        )}
      </S.Boxes>
    </>
  );
};

export default Postlist;
