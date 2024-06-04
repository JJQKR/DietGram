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
  background-color: red;
`;

const Left = styled.div`
  margin: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  align-items: center;
  background-color: green;
`;

const Right = styled.div`
  margin: 30px 0 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  background-color: blue;
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
        <Left>
          아래꺼는 이미지 src바꾸는 로직
          <div>
            <img src={imageSrc} alt="Example" />
            <button onClick={changeImageSrc}>
              프로필 이미지 src로 바로 변경
            </button>
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
          <img src={newPostImage} img="img/" />
          {/* 못생긴 파일선택 버튼 자동생성,
          label태그로 감싸고 스타일 따로 준 뒤 input버튼은 안 보이게 */}
          <input type="file" accept="image/*" onChange={handleSaveImageFile} />
          새로 업로드 하고 미리 보는 로직
          <button>이미지 제거</button>
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
              <button type="submit">수정</button>
            </form>
            {/* //############################################################################################### */}
            <button>취소</button>
          </>
        </Right>
      </Container>
    </>
  );
}
