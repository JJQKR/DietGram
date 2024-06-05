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
  const DefaultMenuImage = 'https://jmagazine.joins.com/_data/photo/2019/02/838745483_xbF6yINr_2.jpg';

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
              src={post.postImage || DefaultMenuImage}
              alt="Menu Image"
              onClick={() => {
                navigate(`/detail/${post.id}`);
                handlePostClick(post.user_id, post.id);
                console.log('post', post);
              }}
            />
          </Post>
        );
      })}
    </>
  );
};

export default MainPost;
