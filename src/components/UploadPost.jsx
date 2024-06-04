import { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Boxes, Left, Right } from './GlobalStyle';

export const Button = styled.button`
  border-radius: 10px;
  background-color: green;
`;
// export const Section = styled.section`
//   display: flex;
//   justify-content: space-between;
//   margin: 20%;
//   border: black 1px solid;
//   border-radius: 10%;
//   background-color: pink;
// `;

export const ImageLabel = styled.label`
  margin: 5px 0 20px 0;
  font-weight: bold;
  font-size: 13px;
  color: #0095f6;
  display: inline-block;
  cursor: pointer;
`;
export const ImageInput = styled.input`
  border: black 1px solid;
  background-color: red;
  border-radius: 50%;
`;

const reader = new FileReader();

export default function UploadPost() {
  const [posts, setPosts] = useState('');

  const [newPostImage, setNewPostImage] = useState('');
  const [newMenu, setNewMenu] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState(Date.now());
  const [newCalories, setNewCalories] = useState('');
  const [newRate, setNewRate] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newPlace, setNewPlace] = useState('');

  const handleAddPost = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (datePattern.test(newDate)) {
      alert('날짜를 YYYY-MM-DD 형식으로 입력해주세요.');
      //sweetAlert 쓰고 싶다
      return;
    }

    const parsedPrice = parseInt(newPrice, 10);
    if (!newMenu || parsedPrice <= 0) {
      alert('유효한 메뉴과 금액을 입력해주세요.');
      return;
    }

    const newPost = {
      id: uuidv4(),
      // newPostImage,
      newMenu,
      newDescription,
      newDate,
      newCalories,
      newRate,
      newPrice,
      newPlace
    };

    localStorage.setItem('새 게시물', JSON.stringify(newPost));

    // setNewPostImage('');
    setNewMenu('');
    setNewDescription('');
    setNewDate('');
    setNewCalories('');
    setNewRate('');
    setNewPrice('');
    setNewPlace('');
  };

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
        <form onSubmit={handleAddPost}>
          <Left>
            <img src={newPostImage} img="img/" />
            <input type="file" accept="image/*" onChange={handleSaveImageFile}></input>

            <label htmlFor="postMenu">메뉴</label>
            <input id="postMenu" type="text" value={newMenu} onChange={(event) => setNewMenu(event.target.value)} />

            <label htmlFor="postDescription">내용</label>
            <textarea
              id="postDescription"
              value={newDescription}
              onChange={(event) => setNewDescription(event.target.value)}
            ></textarea>
            {/* 댓글에서 사용될 수도 있는 textarea와 스타일 맞추기  */}

            <label htmlFor="postDate">날짜</label>
            <input
              id="postDate"
              type="number"
              placeholder="YYYY-MM-DD"
              value={newDate}
              onChange={(event) => setNewDate(event.target.value)}
            />
          </Left>
          <Right>
            {/* 숫자이기만 하면 값 크기 제한 없게 */}
            <label htmlFor="postCalories">칼로리</label>
            <input
              id="postCalories"
              type="number"
              value={newCalories}
              onChange={(event) => setNewCalories(event.target.value)}
            />

            <label htmlFor="postRate">평점</label>
            <input id="postRate" type="number" value={newRate} onChange={(event) => setNewRate(event.target.value)} />

            <label htmlFor="postPrice">금액</label>
            <input
              id="postPrice"
              type="number"
              value={newPrice}
              onChange={(event) => setNewPrice(event.target.value)}
            />

            <label htmlFor="postPlace">장소</label>
            <input id="postPlace" type="text" value={newPlace} onChange={(event) => setNewPlace(event.target.value)} />
            <Button type="submit">저장</Button>
          </Right>
        </form>
      </Boxes>
    </>
  );
}
