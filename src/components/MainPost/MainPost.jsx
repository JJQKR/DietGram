import { useState } from 'react';
import {
  Post,
  PostImage,
  PostList,
  PostTimeCalorie,
  UserData,
  UserImage,
  UserName,
} from './MainPost.styled';

const MainPost = () => {
  const [postCards, setPostCards] = useState([
    {
      id: 1,
      userName: 'user1',
      userImage:
        'https://thumbnail.10x10.co.kr/webimage/image/basic600/411/B004111612.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
      date: '2025-05-31',
      menu: '음식1',
      calorie: '100',
      grade: 5,
      amount: 10000,
      location: '맛집1',
      postImage:
        'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium',
    },
    {
      id: 2,
      userName: 'user2',
      userImage:
        'https://thumbnail.10x10.co.kr/webimage/image/basic600/411/B004111612.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
      date: '2025-06-01',
      menu: '음식2',
      calorie: '100',
      grade: 5,
      amount: 10000,
      location: '맛집2',
      postImage:
        'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium',
    },
    {
      id: 3,
      userName: 'user3',
      userImage:
        'https://thumbnail.10x10.co.kr/webimage/image/basic600/411/B004111612.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
      date: '2025-06-02',
      menu: '음식3',
      calorie: '100',
      grade: 5,
      amount: 10000,
      location: '맛집3',
      postImage:
        'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium',
    },
    {
      id: 4,
      userName: 'user4',
      userImage:
        'https://thumbnail.10x10.co.kr/webimage/image/basic600/411/B004111612.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
      date: '2025-05-4',
      menu: '음식4',
      calorie: '100',
      grade: 5,
      amount: 10000,
      location: '맛집4',
      postImage:
        'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium',
    },
    {
      id: 5,
      userName: 'user5',
      userImage:
        'https://thumbnail.10x10.co.kr/webimage/image/basic600/411/B004111612.jpg?cmd=thumb&w=400&h=400&fit=true&ws=false',
      date: '2025-05-31',
      menu: '음식5',
      calorie: '100',
      grade: 5,
      amount: 10000,
      location: '맛집5',
      postImage:
        'https://www.adobe.com/kr/creativecloud/photography/hub/features/media_19243bf806dc1c5a3532f3e32f4c14d44f81cae9f.jpeg?width=750&format=jpeg&optimize=medium',
    },
  ]);

  return (
    <>
      {postCards.map((postCard) => {
        return (
          <Post key={postCard.id}>
            <PostList>
              <UserData onClick={() => alert('유저 입니다.')}>
                <UserImage src={postCard.userImage} alt="닉네임 사진" />
                <UserName>{postCard.userName}</UserName>
              </UserData>
              <PostTimeCalorie>
                <p>{postCard.date}</p>
                <p>{postCard.calorie} kcal</p>
              </PostTimeCalorie>
            </PostList>
            <PostImage src={postCard.postImage} alt="게시글 사진" />
          </Post>
        );
      })}
    </>
  );
};

export default MainPost;
