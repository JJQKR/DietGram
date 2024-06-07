import { useSelector } from 'react-redux';
import { DetailPostUserImage, DetailPostUserInformation, DetailPostUserName, PostUser } from './DetailPostUser.style';

const DetailPostUser = () => {
  const userInfo = useSelector((state) => state.user.selectedUserInfo);
  const defaultUserImage =
    'https://w7.pngwing.com/pngs/682/203/png-transparent-account-user-person-profile-avatar-basic-interface-icon.png';

  return (
    <DetailPostUserInformation>
      <DetailPostUserName>
        <DetailPostUserImage src={userInfo?.profile_img || defaultUserImage} alt="" />
        <PostUser>{userInfo?.nickName}</PostUser>
      </DetailPostUserName>
    </DetailPostUserInformation>
  );
};

export default DetailPostUser;
