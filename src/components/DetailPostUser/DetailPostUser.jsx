import { useSelector } from 'react-redux';
import { DetailPostUserName, DetailPostUserImage, PostUser, DetailPostUserInformation } from './DetailPostUser.style';

const DetailPostUser = () => {
  const userInfo = useSelector((state) => state.user.selectedUserInfo);

  return (
    <DetailPostUserInformation>
      <DetailPostUserName>
        <DetailPostUserImage src="https://m.rainbow-tree.co.kr/web/product/big/rainbowtree81_2117.jpg" alt="" />
        <PostUser>{userInfo?.nickName}</PostUser>
      </DetailPostUserName>
    </DetailPostUserInformation>
  );
};

export default DetailPostUser;
