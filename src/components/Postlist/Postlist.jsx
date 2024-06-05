import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { Background } from '../../components/DeleteModal/DeleteModal.styled';
import { selectPost, selectUser } from '../../redux/slices/posts.slice';
import { supabase } from '../../supabase/supabase';
import * as S from './Postlist.styled';
const Postlist = () => {
  const dispatch = useDispatch();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const modalBackground = useRef(null);
  const [rawData, setRawData] = useState([]);
  const userId = useSelector((state) => state.user.currentUser.id);
  const currentUserId = useSelector((state) => state.posts.currentUserId);
  console.log(userId, currentUserId);

  useEffect(() => {
    const checkPosts = async () => {
      const data = await supabase.post.getPosts();
      setRawData(data);
    };
    checkPosts();
  }, []);

  const myPostList = rawData.filter((data) => data.user_id === userId);
  const otherPostList = rawData.filter((data) => data.user_id !== userId);
  // const postlist = useSelector((state) => state.posts.postList);
  // console.log(postlist);

  const handleDeleteButtonClick = (id) => {
    const action = selectPost(id);
    dispatch(action);
    setDeleteModalOpen(true);
  };

  const showPosts = (postlist) => {
    {
      return postlist.map((data) => {
        return (
          <S.Post key={data.id}>
            <S.ProfileBox>
              <S.Nickname
                onClick={() => {
                  const action = selectUser(data.user_id);
                  dispatch(action);
                }}
              >
                ddd
              </S.Nickname>
            </S.ProfileBox>
            <S.ContextBox>
              <S.TopBox>
                <S.Fooditem>{data.menu}</S.Fooditem>
                <S.FoodAverage>★ {data.rating}</S.FoodAverage>
              </S.TopBox>
              <S.MiddleBox>
                <S.FoodKcal>{data.kcal} </S.FoodKcal>
                <S.ButtonBox>
                  <S.Button dataUserId={data.user_id} userId={userId}>
                    수정
                  </S.Button>
                  <S.Button dataUserId={data.user_id} userId={userId} onClick={() => handleDeleteButtonClick(data.id)}>
                    삭제
                  </S.Button>
                </S.ButtonBox>
              </S.MiddleBox>
            </S.ContextBox>
          </S.Post>
        );
      });
    }
  };

  return (
    <>
      <S.PostsNumberBox>
        <S.PostsNumber>ddd 님의 포스트 건</S.PostsNumber>
      </S.PostsNumberBox>
      <S.Boxes>
        {currentUserId === userId ? showPosts(myPostList) : showPosts(otherPostList)};
        {deleteModalOpen && (
          <Background
            ref={modalBackground}
            onClick={(e) => {
              if (e.target === modalBackground.current) {
                setDeleteModalOpen(false);
              }
            }}
          >
            <DeleteModal selectedPostId={selectedPostId} setDeleteModalOpen={setDeleteModalOpen} />
          </Background>
        )}
      </S.Boxes>
    </>
  );
};

export default Postlist;
