import {
  Post,
  PostImage,
  PostList,
  PostTimeCalorie,
  UserData,
  UserImage,
  UserName,
} from './MainPost.styled';
import { initDataList } from '../../redux/slices/supabase.slice';
import SupabaseFunc from '../../supabase/supabase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainPost = () => {
  const supabase = SupabaseFunc;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.supabase.dataList);
  const formData = useSelector((state) => state.formData.menu);
  // get posts = App에서 useEffect로 받아서 => initialState 할당
  // 이외 db 다루는 함수 사용 후 redux에 payload로 전달
  // console.log('posts', posts);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await SupabaseFunc.getPosts();
      const action = initDataList(posts);
      dispatch(action);
      return posts;
    };
    getPosts();
  }, []);

  console.log(posts);

  const defaultUserImage =
    'https://w7.pngwing.com/pngs/682/203/png-transparent-account-user-person-profile-avatar-basic-interface-icon.png';

  return (
    <>
      {posts.map((post) => {
        return (
          <Post key={post.id}>
            <PostList>
              <UserData>
                <UserImage
                  src={post.userImage || defaultUserImage}
                  alt="UserImage"
                />
                <UserName>{post.id}</UserName>
              </UserData>
              <PostTimeCalorie>
                <p>{post.created_at.split('T')[0]}</p>
                <p>{post.kcal} kcal</p>
              </PostTimeCalorie>
            </PostList>
            <PostImage src={post.postImage} alt="게시글 사진" />
          </Post>
        );
      })}
    </>
  );
};

export default MainPost;
