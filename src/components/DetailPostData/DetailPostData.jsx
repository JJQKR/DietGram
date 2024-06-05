import { useDispatch, useSelector } from 'react-redux';
import {
  DetailPostDataList,
  DetailPostImage,
  DetailPostInformation,
  DetailPostText,
  PostDate,
  PostGrade
} from './DetailPostData.style';
import { useEffect } from 'react';

const DetailPostData = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.posts.postList);
  const postUserId = useSelector((state) => state.posts.currentUserId);
  const postData = userInfo.find((userPostData) => userPostData.user_id === postUserId);

  return (
    <>
      <DetailPostDataList>
        <DetailPostImage
          src="https://img.freepik.com/free-photo/top-view-table-full-of-delicious-food-composition_23-2149141353.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1717027200&semt=ais_user"
          alt="게시글 사진"
        />
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
          <PostGrade>평점 {postData?.rating}</PostGrade>
        </DetailPostText>
      </DetailPostDataList>
    </>
  );
};

export default DetailPostData;
