import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPost, selectUser } from '../../redux/slices/posts.slice';
import { Post, PostImage, PostList, PostTimeCalorie, UserData, UserImage, UserName } from './MainPost.styled';

const MainPost = () => {
  const data = useSelector((state) => state.activeIndex.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePostClick = (userId, postId) => {
    const selectPostAction = selectPost(postId);
    const action = selectUser(userId);
    dispatch(selectPostAction);
    dispatch(action);
  };

  const defaultUserImage =
    'https://w7.pngwing.com/pngs/682/203/png-transparent-account-user-person-profile-avatar-basic-interface-icon.png';

  return (
    <>
      {data.map((post) => {
        return (
          <Post key={post.id}>
            <PostList>
              <UserData>
                <UserImage src={post.userImage || defaultUserImage} alt="UserImage" />
                <UserName>{post.id}</UserName>
              </UserData>
              <PostTimeCalorie>
                <p>{post.created_at.split('T')[0]}</p>
                <p>{post.kcal} kcal</p>
              </PostTimeCalorie>
            </PostList>
            <PostImage
              src={post.img_url}
              alt="Menu Image"
              onClick={() => {
                navigate(`/detail/${post?.id}`);
                handlePostClick(post.user_id, post.id);
              }}
            />
          </Post>
        );
      })}
    </>
  );
};

export default MainPost;
