import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../supabase/supabase';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/slices/user.slice';


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
  margin: 3rem 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 35%;
  align-items: center;
  /* background-color: green; */
`;

const Right = styled.div`
  margin: 5% 5% 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  width: 35%;
  height: 50%;
  /* background-color: blue; */
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
  display: flex;
  padding: 10rem 1rem;
  width: 100px;
  height: 100px;
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
  flex-direction: column;
  justify-content: right;
  gap: 30px;
`;

const H3 = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;

/**
 * 0. 닉네임 넣는 방법
 *    - auth metadata 에 넣기: https://supabase.com/docs/guides/auth/managing-user-data
 *    - 테이블을 따로 하나 더 만든다 -> imgSrc, nickname을 넣는다
 * 1. 로그인한 유저의 정보를 가져온다
 * 2. 유저의 정보를 화면에 보여준다
 * 3. 유저의 닉네임을 수정한다.
 * 4. 프로필 사진 변경
 */

export default function EditProfile() {

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');


  const [imageSrc, setImageSrc] = useState('image 18.png');
  //이거를 public 폴더에 넣으면 바로 쓸 수 있다

  //imageSrc 바꾸는 함수
  const changeImageSrc = () => {
    setImageSrc('kakaoImage.jpg');
    ///chnageImage 누르면 컴퓨터에서 가져온 새 이미지로 바뀌도록 src설정하기
  };

  const [newPostImage, setNewPostImage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.login.updateNickname(nickname);
    // 로그인했다면 로그인 정보를 가져온다.
    const session = await supabase.login.getSession();
    // 로그인 정보를 리덕스에 저장한다.
    dispatch(getCurrentUser(session?.data.session.user));
  };


  const handleSaveImageFile = (event) => {
    const { files } = event.target;
    const uploadFile = files[0];
    console.log(uploadFile);
    //File
    // {name: 'dfdf.png',
    // lastModified:1717125592134,
    // lastModifiedDate:Fri May 31 2024 12:19:52 GMT+0900 (한국 표준시) {},
    // size: 878563,
    // type: "image/png",
    // webkitRelativePath: ""}

    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      console.log(reader.result);
      //data:image/png;base64,
      //iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAAsTAA
      //ALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACJKSURBVHgB7d0NcFTluQfwJ/uRpBScOIU
      //어쩌구저쩌구
      setNewPostImage(reader.result);
    };
  };

  return (
    <>
      <Container>
        <InnerContainer>
          <Left>
            {/* 아래꺼는 이미지 src 바로 바꾸는 로직이고 그냥 이미지 바로 띄워주고 있는거다 */}
            <div>
              <Image src={imageSrc} alt="Example" />

              <ImageButton onClick={changeImageSrc}>이미지 변경</ImageButton>

            </div>
            <div>
              <img src={currentUser?.user_metadata.avatarUrl} alt="" width="200px" />
            </div>
            <label>
              <Image className="profileImage" src={newPostImage} img="img/" />

              <input type="file" accept="image/*" onChange={handleSaveImageFile} />
            </label>
            {/* 새로 업로드 하고 미리 보는 로직 */}
            <ButtonContainer>
              <ImageButton>이미지 제거</ImageButton>
            </ButtonContainer>
          </Left>

          {/* //############################################################################################### */}
          <Right>
            <>
              <form onSubmit={handleSubmit}>
                <p>현재 닉네임</p>

                <H3>{currentUser?.user_metadata.nickName}</H3>
                {/* <div key={currentUser?.id}>
                  <p>이메일:{currentUser?.email}</p>
                  <p>닉네임: {currentUser?.user_metadata.nickName}</p>
                </div> */}
                <label htmlFor="nicknameInput"></label>
                <input
                  className="nicknameInput"
                  type="text"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                />

                <ButtonContainer>
                  <Button type="submit" onClick={() => alert('중복 검사 만들어야지?')}>
                    완료
                  </Button>
                </ButtonContainer>
              </form>
              <Button onClick={() => alert('홈으로 가게')}>취소</Button>
            </>
          </Right>
        </InnerContainer>
      </Container>
    </>
  );
}
