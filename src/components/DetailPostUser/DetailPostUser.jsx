import {
  DetailPostUserName,
  DetailPostUserImage,
  PostUser,
  DetailPostUserInformation,
} from './DetailPostUser.style';

const DetailPostUser = () => {
  return (
    <DetailPostUserInformation>
      <DetailPostUserName>
        <DetailPostUserImage
          src="https://m.rainbow-tree.co.kr/web/product/big/rainbowtree81_2117.jpg"
          alt=""
        />
        <PostUser>닉네임</PostUser>
      </DetailPostUserName>
    </DetailPostUserInformation>
  );
};

export default DetailPostUser;
