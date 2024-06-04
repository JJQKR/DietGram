import { useSelector } from "react-redux";
import {
  DetailPostDataList,
  DetailPostImage,
  DetailPostInformation,
  DetailPostText,
  PostDate,
  PostGrade,
} from "./DetailPostData.style";

const DetailPostData = () => {
  // const supabase = SupabaseFunc;
  // const dispatch = useDispatch();
  // const posts = useSelector((state) => state.supabase.dataList);
  // // get posts = App에서 useEffect로 받아서 => initialState 할당
  // // 이외 db 다루는 함수 사용 후 redux에 payload로 전달
  // console.log('posts', posts);
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const posts = await SupabaseFunc.getPosts();
  //     const action = initDataList(posts);
  //     dispatch(action);
  //     return posts;
  //   };
  //   getPosts();
  // }, []);

  const posts = useSelector((state) => state.supabase.dataList);
  console.log("posts", posts);

  return (
    <DetailPostDataList>
      <DetailPostImage
        src="https://img.freepik.com/free-photo/top-view-table-full-of-delicious-food-composition_23-2149141353.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1717027200&semt=ais_user"
        alt="게시글 사진"
      />
      <DetailPostText>
        <DetailPostInformation>
          <PostDate>게시 글 시간</PostDate>
          <p>게시 글</p>
          <p>장소</p>
          <p>칼로리 / 금액</p>
        </DetailPostInformation>
        <PostGrade>평점</PostGrade>
      </DetailPostText>
    </DetailPostDataList>
  );
};

export default DetailPostData;