import { useSelector } from 'react-redux';
import {
  DetailPostDataList,
  DetailPostImage,
  DetailPostInformation,
  DetailPostText,
  PostDate,
  PostGrade
} from './DetailPostData.style';

const DetailPostData = () => {
  const userInfo = useSelector((state) => state.posts.postList);
  const postId = useSelector((state) => state.posts.currentPostId);
  const postDataIdx = userInfo.findIndex((userPostData) => userPostData.id === postId);

  return (
    <>
      <DetailPostDataList>
        <DetailPostImage src={userInfo[postDataIdx].img_url} alt="게시글 사진" />
        <DetailPostText>
          <DetailPostInformation>
            <PostDate>{userInfo[postDataIdx]?.created_at.split('T')[0]}</PostDate>
            <p>{userInfo[postDataIdx]?.menu}</p>
            <p>{userInfo[postDataIdx]?.content}</p>
            <p>{userInfo[postDataIdx]?.place}</p>
            <p>
              {userInfo[postDataIdx]?.kcal} Kcal / {userInfo[postDataIdx]?.price} 원
            </p>
          </DetailPostInformation>
          <PostGrade>평점 {userInfo[postDataIdx]?.raiting}</PostGrade>
        </DetailPostText>
      </DetailPostDataList>
    </>
  );
};

export default DetailPostData;
