import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { Background } from "../../components/DeleteModal/DeleteModal.styled";
import * as S from "./Postlist.styled";

const Postlist = () => {
  // protected route 알아보기
  // 메인페이지 redirect
  // user_id 갖다쓰기

  //const datalist = useSelector((state) => state.supabase.dataList);
  // console.log(datalist);
  //const userData = JSON.parse(
  // 로컬스토리지 로그인 정보에서 가져온 데이터.. 테스트용
  // 나중에 supabase 유저 테이블에서 가져오는 방식으로 수정하기
  //localStorage.getItem("sb-mtddrulacypyulwcwtsh-auth-token")
  //);
  // const nickName = userData.user.user_metadata.user_name;
  //const currentUserId = userData.user.id;

  //const filteredDataList = datalist.filter(
  //(data) => data.user_id === currentUserId
  //);
  //console.log(filteredDataList);

  const [selectedPostId, setSelectedPostId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const modalBackground = useRef(null);

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

  // ProfileImage 클릭하면 해당 유저의 포스트리스트 페이지로 이동
  // FoodImage 클릭하면 해당 게시물의 상세 페이지로 이동

  // 본인 페이지가 아니면 수정, 삭제 버튼 안 보이게
  // 수정버튼 누르면 게시물 수정 페이지로 이동
  // 삭제 버튼 누르면 삭제 모달 띄우기
  //const supabase = SupabaseFunc;
  //const dispatch = useDispatch();

  const handleDeleteButtonClick = async (id) => {
    setSelectedPostId(id);
    // const data = await supabase.deletePost(id);
    // dispatch(deletePost(data));
    // setDeleteModalOpen(true);
  };

  // {filteredDataList.map((data) => {
  //   return (
  //     <S.Post key={data.id}>
  //       <S.ProfileBox>
  //         {/*<S.ProfileImage src={post.profileImage} alt="Profile Image" />*/}
  //         <S.Nickname>{data.id}</S.Nickname>
  //       </S.ProfileBox>
  //       {/*<S.FoodFile src={post.file} alt="Food Image" />*/}
  //       <S.ContextBox>
  //         <S.TopBox>
  //           <S.Fooditem>{data.menu}</S.Fooditem>
  //           <S.FoodAverage>★ {data.rating}</S.FoodAverage>
  //         </S.TopBox>
  //         <S.MiddleBox>
  //           <S.FoodKcal>{data.kcal} </S.FoodKcal>
  //           <S.ButtonBox>
  //             <S.Button
  //               postUserId={data.user_id}
  //               currentUserId={currentUserId}
  //             >
  //               수정
  //             </S.Button>
  //             <S.Button
  //               postUserId={data.user_id}
  //               currentUserId={currentUserId}
  //               onClick={() => handleDeleteButtonClick(data.id)}
  //             >
  //               삭제
  //             </S.Button>
  //           </S.ButtonBox>
  //         </S.MiddleBox>
  //       </S.ContextBox>
  //     </S.Post>
  //   );
  // })}

  return (
    <>
      <S.PostsNumberBox>
        <S.PostsNumber>어쩌구 님의 포스트 {posts.length}건</S.PostsNumber>
      </S.PostsNumberBox>
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
