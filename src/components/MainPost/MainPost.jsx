import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPost, selectUser } from '../../redux/slices/posts.slice';
import { Post, PostImage, PostList, PostTimeCalorie, UserData, UserImage, UserName } from './MainPost.styled';

const MainPost = () => {
  const data = useSelector((state) => state.activeIndex.data);
  const userData = useSelector((state) => state.user?.totalUserInfo);
  const getNickName = (userId) => {
    const curUserData = userData.data.find((item) => item.user_id === userId);
    return curUserData?.nickName;
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfileImg = (user_id) => {
    const profileImg = userData.data.filter((item) => item.user_id === user_id)[0].profile_img;
    return profileImg;
  };
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
                <UserImage src={getProfileImg(post?.user_id) || defaultUserImage} alt="UserImage" />
                <UserName
                  onClick={() => {
                    dispatch(selectUser(post?.user_id));
                    navigate(`/mypost/${post?.user_id}`);
                  }}
                >
                  {getNickName(post?.user_id)}
                </UserName>
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
