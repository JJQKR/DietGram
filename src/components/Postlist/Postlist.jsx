import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { Background } from "../../components/DeleteModal/DeleteModal.styled";
import * as S from "./Postlist.styled";
import { useDispatch, useSelector } from "react-redux";
import { changePost, changeValue } from "../../redux/slices/form.slice";
import { supabase } from "../../supabase/supabase";
import { deleteData } from "../../redux/slices/supabase.slice";

const Postlist = () => {
  const dispatch = useDispatch();
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const modalBackground = useRef(null);
  const [rawData, setRawData] = useState([]);
  const userId = useSelector((state) => state.currentUser.currentUser.id);
  const nickName = useSelector(
    (state) => state.currentUser.currentUser.user_metadata.nickName
  );
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      profileImage: "/public/img/back-arrow-navigation.png",
      nickname: "a_big_eater",
      file: "/public/img/back-arrow-navigation.png",
      food: "까르보나라 파스타",
      average: 5,
      kcal: "693kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/img/back-arrow-navigation.png",
      nickname: "hungry",
      file: "/public/img/back-arrow-navigation.png",
      food: "양배추참치덮밥",
      average: 5,
      kcal: "330kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/img/back-arrow-navigation.png",
      nickname: "food_fighter",
      file: "/public/img/back-arrow-navigation.png",
      food: "교촌허니콤보",
      average: 5,
      kcal: "370kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/img/back-arrow-navigation.png",
      nickname: "5oonwan",
      file: "/public/img/back-arrow-navigation.png",
      food: "닭가슴살",
      average: 5,
      kcal: "165kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/img/back-arrow-navigation.png",
      nickname: "baegopa",
      file: "/public/img/back-arrow-navigation.png",
      food: "요아정",
      average: 5,
      kcal: "191kcal",
    },
  ]);

  useEffect(() => {
    const insertPost = async () => {
      const postitem = {
        menu: "족발",
        content: "맛있네용",
        kcal: 500,
        raiting: 4,
        price: 25000,
        place: "장충동왕족발",
      };
      await supabase.post.insertPost(postitem);
    };
    const checkPosts = async () => {
      const data = await supabase.post.getPosts();
      setRawData(data);
    };
    insertPost();
    checkPosts();
  }, []);

  const myPostList = rawData.filter((data) => data.user_id === userId);
  const otherPostList = rawData.filter((data) => data.user_id !== userId);
  console.log(myPostList, otherPostList);

  const handleDeleteButtonClick = async (id) => {
    //setSelectedPostId(id);
    const data = await supabase.deleteData(id);
    dispatch(deleteData(data));
    setDeleteModalOpen(true);
  };

  // const handleSaveBtn = (e) => {
  //   e.preventDefault();
  //   const action = changePost({
  //     menu: postsData.menu,
  //     content: postsData.content,
  //     kcal: postsData.kcal,
  //     rating: postsData.rating,
  //     //id: postsData.id,
  //   });
  //   dispatch(action);
  // };

  {
    /* <input
        type="text"
        onChange={(e) => {
          const action = changeValue({
            type: "menu",
            content: e.target.value,
          });
          dispatch(action);
          setPostsData((prev) => {
            return { ...prev, menu: e.target.value };
          });
        }}
      />
      <button onClick={handleSaveBtn}> 포스트 저장 </button> */
  }
  return (
    <>
      <S.PostsNumberBox>
        <S.PostsNumber>
          {nickName} 님의 포스트 {posts.length}건
        </S.PostsNumber>
      </S.PostsNumberBox>
      <S.Boxes>
        {/* {posts.map((post) => {
          return (
            <S.Post key={post.id}>
              <S.ProfileBox>
                <S.ProfileImage src={post.profileImage} alt="Profile Image" />
                <S.Nickname>{post.nickname}</S.Nickname>
              </S.ProfileBox>
              <S.FoodFile src={post.file} alt="Food Image" />
              <S.ContextBox>
                <S.TopBox>
                  <S.Fooditem>{post.food}</S.Fooditem>
                  <S.FoodAverage>★ {post.average}</S.FoodAverage>
                </S.TopBox>
                <S.MiddleBox>
                  <S.FoodKcal>{post.kcal} </S.FoodKcal>
                  <S.ButtonBox>
                    <S.Button>수정</S.Button>
                    <S.Button onClick={() => handleDeleteButtonClick(post.id)}>
                      삭제
                    </S.Button>
                  </S.ButtonBox>
                </S.MiddleBox>
              </S.ContextBox>
            </S.Post>
          );
        })} */}
        {filteredDataList.map((data) => {
          return (
            <S.Post key={data.id}>
              <S.ProfileBox>
                <S.Nickname>{nickName}</S.Nickname>
              </S.ProfileBox>
              <S.ContextBox>
                <S.TopBox>
                  <S.Fooditem>{data.menu}</S.Fooditem>
                  <S.FoodAverage>★ {data.rating}</S.FoodAverage>
                </S.TopBox>
                <S.MiddleBox>
                  <S.FoodKcal>{data.kcal} </S.FoodKcal>
                  <S.ButtonBox>
                    <S.Button dataId={data.id} userId={userId}>
                      수정
                    </S.Button>
                    <S.Button
                      dataId={data.id}
                      userId={userId}
                      onClick={handleDeleteButtonClick}
                    >
                      삭제
                    </S.Button>
                  </S.ButtonBox>
                </S.MiddleBox>
              </S.ContextBox>
            </S.Post>
          );
        })}

        {deleteModalOpen && (
          <Background
            ref={modalBackground}
            onClick={(e) => {
              if (e.target === modalBackground.current) {
                setDeleteModalOpen(false);
              }
            }}
          >
            <DeleteModal
              posts={posts}
              setPosts={setPosts}
              selectedPostId={selectedPostId}
              setDeleteModalOpen={setDeleteModalOpen}
            />
          </Background>
        )}
      </S.Boxes>
    </>
  );
};

export default Postlist;
