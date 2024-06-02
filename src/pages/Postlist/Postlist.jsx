import { useRef, useState } from "react";
import * as S from "./Postlist.styled";
import { v4 as uuidv4 } from "uuid";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { Background } from "../../components/DeleteModal/DeleteModal.styled";

const Postlist = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const modalBackground = useRef(null);
  //console.log(modalBackground.current);

  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "a_big_eater",
      file: "/public/vite.svg",
      food: "까르보나라 파스타",
      average: 5,
      kcal: "693kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "hungry",
      file: "/public/vite.svg",
      food: "양배추참치덮밥",
      average: 5,
      kcal: "330kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "food_fighter",
      file: "/public/vite.svg",
      food: "교촌허니콤보",
      average: 5,
      kcal: "370kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "5oonwan",
      file: "/public/vite.svg",
      food: "닭가슴살",
      average: 5,
      kcal: "165kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "baegopa",
      file: "/public/vite.svg",
      food: "요아정",
      average: 5,
      kcal: "191kcal",
    },
  ]);

  // ProfileImage 클릭하면 해당 유저의 포스트리스트 페이지로 이동
  // FoodImage 클릭하면 해당 게시물의 상세 페이지로 이동

  // 본인 페이지가 아니면 수정, 삭제 버튼 안 보이게
  // 수정버튼 누르면 게시물 수정 페이지로 이동
  // 삭제 버튼 누르면 삭제 모달 띄우기 ?

  const handleDeleteButtonClick = (id) => {
    setSelectedPostId(id);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <div>
        <S.PostsNumber>어쩌구 님의 포스트 {posts.length}건</S.PostsNumber>
      </div>
      <S.Boxes>
        {posts.map((post) => {
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
