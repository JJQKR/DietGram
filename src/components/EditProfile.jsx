import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Boxes, Left, Right } from "./GlobalStyle";

export default function EditProfile() {
  const [initialProfile, setInitialProfile] = useState([
    { key: uuidv4(), id: "ssyc@naver.com", nickname: "JJQKR" },
  ]);
  const [imageSrc, setImageSrc] = useState("image 18.png");
  //이거를 public 폴더에 넣으면 import 없이 바로 쓸 수 있구나

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
      <Boxes>
        <Left>
          아래꺼는 이미지 src바꾸는 로직
          <div>
            <img src={imageSrc} alt="Example" />
            <button onClick={changeImageSrc}>
              프로필 이미지 src로 바로 변경
            </button>
          </div>
          <p>이미지 미리 보기</p>
          <img src={newPostImage} img="img/" />
          {/* 못생긴 파일선택 버튼 자동생성,
          label태그로 감싸고 스타일 따로 준 뒤 input버튼은 안 보이게 */}
          <input type="file" accept="image/*" onChange={handleSaveImageFile} />
          새로 업로드 하고 미리 보는 로직
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
