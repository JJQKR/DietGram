import { useDispatch, useSelector } from 'react-redux';
import {
  DetailPostDataList,
  DetailPostImage,
  DetailPostInformation,
  DetailPostText,
  PostDate,
  PostGrade
} from './DetailPostData.style';

const DetailPostData = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.posts.postList);
  const postUserId = useSelector((state) => state.posts.currentUserId);
  const postData = userInfo.find((userPostData) => userPostData.user_id === postUserId);
  console.log('postData', postData);

  return (
    <>
      <DetailPostDataList>
        <DetailPostImage src={postData?.img_url} alt="게시글 사진" />
        <DetailPostText>
          <DetailPostInformation>
            <PostDate>{postData?.created_at.split('T')[0]}</PostDate>
            <p>{postData?.menu}</p>
            <p>{postData?.content}</p>
            <p>{postData?.place}</p>
            <p>
              {postData?.kcal} Kcal / {postData?.price} 원
            </p>
          </DetailPostInformation>
          <PostGrade>평점 {postData?.raiting}</PostGrade>
        </DetailPostText>
      </DetailPostDataList>
    </>
  );
};

export default DetailPostData;
