import { createContext, useContext, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

export const Button = styled.button`
  border-radius: 10px;
  background-color: green;
`;
export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 20%;
  border: black 1px solid;
  border-radius: 10%;
  background-color: pink;

  //좌우 분할,
  //각각 영역에서 상하 좌우 가운데 정렬
  //텍스트는 왼쪽 정렬
  //버튼은 우측 정렬
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
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

//사진, 메뉴(API), 내용, 칼로리(API), 평점, 금액, 장소
//본 페이지에서 바로 입력값 받고 저장
//그러면 여기가 저 데이터들을 관리할 최상위 루트?
//store? provider? selector? dispatch?

const PostsContext = createContext(null);
const [posts, setPosts] = useContext();
//이거 여기 있는 게 맞나?

const reader = new FileReader();

export default function UploadPost() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [newPostImage, setNewPostImage] = useState();
  const [newMenu, setNewMenu] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState(Date.now());
  //Date.now???
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
      postImage: newPostImage,
      menu: newMenu,
      description: newDescription,
      date: newDate,
      calories: newCalories,
      rate: newRate,
      price: newPrice,
      place: newPlace
    };

    dispatch(addPost(newPost));

    setNewPostImage('');
    setNewMenu('');
    setNewDescription('');
    setNewDate('');
    setNewCalories('');
    setNewRate('');
    setNewPrice('');
    setNewPlace('');

    navigate('/');
  };

  const handleCancelPost = () => {
    //초기화하고 넘어가야 하나? 넘어갈 때 그냥 초기화되나?
    navigate('/detail'); //페이지명 수정 필요
  };

  const [imageFile, setImageFile] = useState(); //이미지 파일 미리보기에 사용
  const imageRef = useRef(); //이미지 파일 미리보기에 사용

  //이미지 업로드 input의 onChange
  const saveImageFile = () => {
    const file = imageRef.current.file[0];
    reader.ReadAsDataURL(file);
    reader.onloadene = () => {
      setImageFile(reader.result);
    };
  };

  //업로드된 이미지 미리보기
  <img src={imageFile ? imageFile : `/images/icon/user.png`} alt="포스트 이미지" />;

  return (
    <>
      <Section>
        <form onSubmit={handleAddPost}>
          <form>
            <ImageLabel htmlFor="postImage" className="postImageLabel">
              사진 불러오기
            </ImageLabel>
            <ImageInput
              id="postImage"
              className="postImageInput"
              type="file"
              accept="image/*"
              onChange={saveImageFile}
              ref={imageRef}
            />
            <button></button>
          </form>
          {/* api데이터 */}
          <label htmlFor="postMenu">메뉴</label>
          <input id="postMenu" type="text" value={newMenu} onChange={(event) => setNewMenu(event.target.value)} />
          <label htmlFor="postDescription">내용</label>
          <textarea
            id="postDescription"
            style={{ resize: none }}
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
          {/* api 데이터 */}
          {/* 숫자이기만 하면 값 크기 제한 없게 */}
          <label htmlFor="postCalories">칼로리</label>
          <input
            id="postCalories"
            type="number"
            value={newCalories}
            onChange={(event) => setNewCalories(event.target.value)}
          />
          {/* min = 1, max = 10으로 설정하는 거 있던데 영화 과제 혜미님 코드에 */}
          <label htmlFor="postRate">평점</label>
          <input id="postRate" type="number" value={newRate} onChange={(event) => setNewRate(event.target.value)} />
          {/* 숫자이기만 하면 값 크기 제한 없게, 0원도 가능 */}
          <label htmlFor="postPrice">금액</label>
          <input id="postPrice" type="number" value={newPrice} onChange={(event) => setNewPrice(event.target.value)} />
          <label htmlFor="postPlace">장소</label>
          <input id="postPlace" type="text" value={newPlace} onChange={(event) => setNewPlace(event.target.value)} />
          <Button type="submit" onClick={() => navigate('/detail')}>
            {/* page명 수정 필요 */}
            저장
          </Button>
          {/* 저장하면 상세페이지로 이동, 페이지명 수정 필요 */}
          <Button onClick={() => navigate('/')}>취소</Button>
          {/* 취소하면 홈으로 이동*/}
        </form>
      </Section>
    </>
  );
}

// FileReader API
// 이미지 미리보기를 구현하기 위해 FileReader API를 사용했어요.
// FileReader는 웹 API랍니다.
// 웹 API란 개발자가 브라우저 상에 쉽게 개발할 수 있도록 도와주는 객체의 모음들이죠.
// 이 FileReader도 객체의 형태를 띄고있어요. 따라서 new FileReader()로 파일리더를 만들어준 뒤 사용해줄 수 있어요.

// readAsDataURL
// readAsDataURL을 통해 파일을 URL로 만들 수 있어요.
// 파일 정보를 주소처럼 사용할 수 있게 된답니다.
