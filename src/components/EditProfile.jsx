import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { changeValue } from '../redux/slices/form.slice';
import { getCurrentUser } from '../redux/slices/user.slice';
import { supabase } from '../supabase/supabase';

export default function EditProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sliceNickname = useSelector((state) => state.formData.nickName);
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentUserId = currentUser.id;
  const currentNickName = currentUser.user_metadata.nickName;
  const currentProfileImage = currentUser.user_metadata.avatarUrl;
  const [postImage, setPostImage] = useState('');
  const [newImageFile, setNewImageFile] = useState(currentProfileImage);

  useEffect(() => {
    dispatch(changeValue({ type: "nickName", content: currentNickName }));
    dispatch(changeValue({ type: "imageUrl", content: currentProfileImage }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postImageUrl = await uploadImageFileToStorage(postImage);
    const userData = {
      ...currentUser,
      user_metadata: { ...currentUser.user_metadata, nickName: sliceNickname, avatarUrl: postImageUrl }
    };
    dispatch(getCurrentUser(userData));
    await supabase.login.changeUserInfo(currentUserId, sliceNickname, postImageUrl);
    navigate('/');
  };

  const uploadImageFileToStorage = async (file) => {
    if (!file) {
      return newImageFile;
    }
    const imageUrl = await supabase.login.uploadServerProfileImage(file);
    try {
      return imageUrl;
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageFile = (event) => {
    const { files } = event.target;
    const uploadedFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadedFile);
    reader.onloadend = () => {
      setNewImageFile(reader.result);
    };
    setPostImage(uploadedFile);
    console.log(uploadedFile);
  };

  const handleClickRemoveImageButton = async () => {
    setNewImageFile('https://mtddrulacypyulwcwtsh.supabase.co/storage/v1/object/public/dietgram-images/profile-images/dafalut_image2-removebg-preview.png');
    const userData = {
      ...currentUser,
      user_metadata: { ...currentUser.user_metadata, nickName: sliceNickname, avatarUrl: newImageFile }
    };
    dispatch(getCurrentUser(userData));
    await supabase.login.changeUserInfo(currentUserId, sliceNickname, newImageFile);
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <Left>
            <Image className="profileImage" src={newImageFile} img="img/" />
            <ButtonContainer>
              <ImageButton onClick={handleClickRemoveImageButton}>이미지 제거</ImageButton>
              <input type="file" accept="image/*" onChange={handleImageFile} />
            </ButtonContainer>
          </Left>
          <Right>
            <Form onSubmit={handleSubmit}>
              <p>현재 닉네임</p>
              <H3>{currentUser?.user_metadata.nickName}</H3>
              <input
                className="nicknameInput"
                type="text"
                value={sliceNickname}
                onChange={(event) => {
                  const action = changeValue({ type: 'nickName', content: event.target.value });
                  dispatch(action);
                }}
              />

              <ButtonContainer>
                <Button type="submit">완료</Button>
                <Button onClick={() => navigate('/')}>취소</Button>
              </ButtonContainer>
            </Form>
          </Right>
        </InnerContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const InnerContainer = styled.div`
  background-color: #e7e7e7;
  width: 70%;
  max-width: 800px;
  height: 500px;
  margin: 5rem 1rem;
  border: 1px black solid;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  align-items: center;
`;
const Right = styled.div`
  margin: 5% 5% 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
`;
const Button = styled.button`
  color: #343434;
  background-color: #b1b1b1;

  width: 40px;
  height: 25px;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-family: 'SUITE-Regular';
  &:hover {
    color: white;
    background-color: #0084fd;
    transition: 0.3s;
    cursor: pointer;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const ImageButton = styled.button`
  align-items: center;
  color: #343434;
  background-color: #b1b1b1;

  width: 100px;
  height: 25px;
  border-radius: 10px;
  border: none;

  font-size: 13px;
  font-family: 'SUITE-Regular';
  &:hover {
    color: white;
    background-color: #0084fd;
    transition: 0.3s;
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
const H3 = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FileInputWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const CustomButton = styled.button`
  width: 130px;
  background-color: #d9d9d9;
  color: black;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    background-color: gray;
    color: white;
  }
`;

const Input = styled.input`
  width: 260px;
  height: 30px;
  font-size: 25px;
  margin-top: 20px;
`;

const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
