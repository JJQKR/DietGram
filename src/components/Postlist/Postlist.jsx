import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { Background } from '../../components/DeleteModal/DeleteModal.styled';
import { initPostList, selectPost, selectUser } from '../../redux/slices/posts.slice';
import * as S from './Postlist.styled';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabase/supabase';

// 닉네임 불러오기
// 프로필 사진이나 닉네임을 클릭하면 그 포스트의 유저아이디를 받아 일치하는 포스트리스트페이지로 이동
// myPostlist인 경우, 수정 삭제 버튼 사용가능
// otherPostlist인 경우, 수정 삭제 버튼 작동하지 않게 숨기기
// 포스트 사진을 클릭하면 해당 포스트의 상세 페이지로 이동

const Postlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const modalBackground = useRef(null);

  // useEffect(() => {
  //   const getPostsData = async () => {
  //     const { data } = await supabase.post.getPosts();
  //     dispatch(initPostList(data)); // postlist 초기화
  //   };
  //   getPostsData();
  // }, []);

  const rawData = useSelector((state) => state.posts.postList);
  console.log(rawData);
  const userId = useSelector((state) => state.user.currentUser?.id); // 로그인 한 계정의 id
  const currentUserId = useSelector((state) => state.posts.currentUserId); // 현재 postlist에서 뿌려주는 post의 유저 id
  const myPostList = rawData.filter((data) => data.user_id === currentUserId);
  const totalUser = useSelector((state) => state.user.totalUserInfo.data);
  console.log('totalUser =>', totalUser);

  const [clickedPostId, setClickedPostId] = useState('');

  //const [postsData, setPostsData] = useState([]);

  //console.log('currentUserData=>', currentUserData);

  const currentUserInfo = totalUser.find((user) => user.user_id === currentUserId);
  console.log(currentUserInfo);
  // console.log('currentUserData =>', currentUserData);
  console.log('currentUserId =>', currentUserId);
  //console.log("userId =>", currentUserId)

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
                  {currentUserInfo.nickName}
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
          {currentUserInfo.nickName} 님의 포스트 {myPostList.length}건
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
