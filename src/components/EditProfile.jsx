import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { Boxes, Left, Right } from "./GlobalStyle";

export default function EditProfile() {
  const [initialProfile, setInitialProfile] = useState([
    { key: uuidv4(), id: "ssyc@naver.com", nickname: "JJQKR" },
    { key: uuidv4(), id: "yjco@naver.com", nickname: "문샤" },
  ]);
  const [imageSrc, setImageSrc] = useState("kakaoImage.jpg");
  //이거를 public 폴더에 넣으면 import 없이 바로 쓸 수 있구나

  //imageSrc 바꾸는 함수
  const changeImageSrc = () => {
    setImageSrc("new-image-src.jpg");
  };

  const [newPostImage, setNewPostImage] = useState("");

  const handleSaveImageFile = (event) => {
    const { files } = event.target;
    const uploadFile = files[0];
    console.log(uploadFile);
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      console.log(reader.result);
      setNewPostImage(reader.result);
    };
  };

  return (
    <>
      <Boxes>
        <Left>
          <img src={newPostImage} img="img/" />
          <input
            type="file"
            accept="image/*"
            onChange={handleSaveImageFile}
          ></input>
          위에꺼는 새거 업로드때 쓴 로직 아래꺼는 이미지 src바꾸는 로직
          <div>
            <img src={imageSrc} alt="Example" />
            <button onClick={changeImageSrc}>Change Image</button>
          </div>
          <button>프로필 이미지 업로드</button>
          <button>이미지 제거</button>
        </Left>
        <Right>
          현재 닉네임
          {initialProfile.map((user) => {
            return (
              <div key={user.key}>
                <li>이메일 :{user.id}</li>
                <li> 닉네임: {user.nickname}</li>
              </div>
            );
          })}
          <form onSubmit={changeImageSrc}>
            <label htmlFor="NewNickname"></label>
            <input className="NewNickname" type="text"></input>
            {/* 중복 검사 필요 */}

            <button type="submit">수정</button>
          </form>
          <button>취소</button>
        </Right>
      </Boxes>
    </>
  );
}
