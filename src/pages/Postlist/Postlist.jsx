import { useState } from "react";
import * as S from "./Postlist.styled";
import { v4 as uuidv4 } from "uuid";

const Postlist = () => {
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "a_big_eater",
      file: "/public/vite.svg",
      food: "까르보나라 파스타",
      kcal: "693kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "hungry",
      file: "/public/vite.svg",
      food: "양배추참치덮밥",
      kcal: "330kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "food_fighter",
      file: "/public/vite.svg",
      food: "교촌허니콤보",
      kcal: "370kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "5oonwan",
      file: "/public/vite.svg",
      food: "닭가슴살",
      kcal: "165kcal",
    },
    {
      id: uuidv4(),
      profileImage: "/public/vite.svg",
      nickname: "baegopa",
      file: "/public/vite.svg",
      food: "요아정",
      kcal: "191kcal",
    },
  ]);

  // ProfileImage 클릭하면 해당 유저의 포스트리스트 페이지로 이동
  // FoodImage 클릭하면 해당 게시물의 상세 페이지로 이동

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

              <S.FoodImage src={post.file} alt="Food Image" />
              <h3>{post.food}</h3>
            </S.Post>
          );
        })}
      </S.Boxes>
    </>
  );
};

export default Postlist;
