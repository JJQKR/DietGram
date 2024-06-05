import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../supabase/supabase";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  background-color: red;
`;

// 한 줄에 있을 애들 끼리 div로 묶고
// flex에서 gap사용: 버튼이 따닥 붙어 있으면 요소들 사이 간격 주기가 gap
// rem단위/px단위

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

const Image = styled.img`
  display: flex;
  padding: 10rem 1rem;
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ImageButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const NicknameButton = styled.button`
  background-color: #0084fd;
  color: white;
  border-radius: 5px;
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
  //###############################################################################################
  const [initialProfile, setInitialProfile] = useState([
    { key: uuidv4(), id: "ssyc@naver.com", nickname: "JJQKR" },
    { key: uuidv4(), id: "yjco@naver.com", nickname: "문샤" },
  ]);

  const [nickname, setNickname] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const session = await supabase.login.getSession();
      // 유저 정보
      console.log(session.data);
      // session.data.user => id, email, ...
      setUser(session.data.user);
    };
    getUser();
  }, []);

  const handleEditProfile = async () => {
    const newProfile = {
      key,
      id,
      nickname,
    };
    setInitialProfile([...initialProfile, newProfile]);
    // 닉네임을 변경하는 코드를 작성한다.
    // await supabase.
  };
  //###############################################################################################

  const [imageSrc, setImageSrc] = useState("image 18.png");
  //이거를 public 폴더에 넣으면 바로 쓸 수 있다

  //imageSrc 바꾸는 함수
  const changeImageSrc = () => {
    setImageSrc("kakaoImage.jpg");
    ///chnageImage 누르면 컴퓨터에서 가져온 새 이미지로 바뀌도록 src설정하기
  };

  const [newPostImage, setNewPostImage] = useState("");

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
              <ImageButton onClick={changeImageSrc}>
                이미지 src 변경
              </ImageButton>
            </div>
            <div>
              {/* <Emoji
              symbol="👀"
              label="eyes"
              padding={"6px 0px 0px 0px"}
              emojiSize={"20px"}
            /> */}
              이미지 미리보기
            </div>
            <label>
              <Image className="profileImage" src={newPostImage} img="img/" />
              {/* * 못생긴 파일선택 버튼 자동생성, label태그로 감싸고 스타일 따로 준
              뒤 input버튼은 안 보이게 */}
              <input
                type="file"
                accept="image/*"
                onChange={handleSaveImageFile}
              />
            </label>
            {/* 새로 업로드 하고 미리 보는 로직 */}
            <ImageButton>이미지 제거</ImageButton>
          </Left>

          {/* //############################################################################################### */}
          <Right>
            <>
              현재 닉네임
              <form onSubmit={handleEditProfile}>
                {initialProfile.map((user) => {
                  return (
                    <div key={user.key}>
                      <li>이메일 :{user.id}</li>
                      <li>닉네임: {user.nickname}</li>
                    </div>
                  );
                })}
                <div key={user?.id}>
                  <li>이메일 :{user?.id}</li>
                  {/* TODO: 수정하기 */}
                  {/* <li>닉네임: {user.raw_metadata.nickname}</li> */}
                </div>
                <label htmlFor="nicknameInput"></label>
                <input
                  className="nicknameInput"
                  type="text"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                />
                {/* 중복 검사 필요 */}
                <NicknameButton type="submit">수정</NicknameButton>
              </form>
              {/* //############################################################################################### */}
              <NicknameButton>취소</NicknameButton>
            </>
          </Right>
        </InnerContainer>
      </Container>
    </>
  );
}