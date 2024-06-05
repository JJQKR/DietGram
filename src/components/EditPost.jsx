import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changePost, deletePost } from '../redux/slices/postsSlice';
import { Boxes } from './GlobalStyle';

export default function EditPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);

  const selectedPost = posts.find((element) => element.id === id);
  //근데 selectedPost를 정하는 게, 상세페이지에서 넘어올 때도 필요한가?

  // const [postImage, setPostImage] = useState(selectedPost.postImage);
  const [menu, setMenu] = useState(selectedPost.menu);
  const [description, setDescription] = useState(selectedPost.description);
  const [date, setDate] = useState(selectedPost.date);
  const [calories, setCalories] = useState(selectedPost.calories);
  const [rate, setRate] = useState(selectedPost.rate);
  const [price, setPrice] = useState(selectedPost.price);
  const [place, setPlace] = useState(selectedPost.place);

  const handleChangePost = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(date)) {
      alert('날짜를 YYYY-MM-DD 형식으로 입력해주세요.');
      return;
    }
    if (!menu || price <= 0) {
      //근데 0원일 수도 있지 않나??
      alert('유효한 항목과 금액을 입력해주세요.');
      return;
    }
    const newPost = {
      id,
      // postImage,
      menu,
      description,
      date,
      calories,
      rate,
      price,
      place
    };

    dispatch(changePost(newPost));
    navigate('/detail'); //페이지명 변경 필요
  };

  const handleDeletePost = () => {
    dispatch(deletePost({ id }));
    navigate('/');
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
      {/* 이전페이지(상세페이지나 마이포스트s)에서 수정 눌러서 올 때
  id값 가지고 오는 로직 */}
      {posts.map((post) => (
        <li
          key={post.id}
          onClick={() => {
            navigate(`/detail/${post.id}`);
          }}
        ></li>
      ))}
      <Boxes>
        <form onSubmit={handleChangePost}>
          {/* <form>
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
            <button></button> */}
        </form>
        {/* api데이터 */}
        <label htmlFor="postMenu">메뉴</label>
        <input id="postMenu" type="text" value={menu} onChange={(event) => setMenu(event.target.value)} />
        <label htmlFor="postDescription">내용</label>
        <textarea
          id="postDescription"
          style={{ resize: none }}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        {/* 댓글에서 사용될 수도 있는 textarea와 스타일 맞추기  */}
        <label htmlFor="postDate">날짜</label>
        <input
          id="postDate"
          type="number"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        {/* api 데이터 */}
        {/* 숫자이기만 하면 값 크기 제한 없게 */}
        <label htmlFor="postCalories">칼로리</label>
        <input
          id="postCalories"
          type="number"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
        />
        {/* min = 1, max = 10으로 설정하는 거 있던데 영화 과제 혜미님 코드에 */}
        <label htmlFor="postRate">평점</label>
        <input id="postRate" type="number" value={rate} onChange={(event) => setRate(event.target.value)} />
        {/* 숫자이기만 하면 값 크기 제한 없게, 0원도 가능 */}
        <label htmlFor="postPrice">금액</label>
        <input id="postPrice" type="number" value={newPrice} onChange={(event) => setNewPrice(event.target.value)} />
        <label htmlFor="postPlace">장소</label>
        <input id="postPlace" type="text" value={place} onChange={(event) => setPlace(event.target.value)} />
        <Button type="submit" onClick={() => navigate('/detail')}>
          {/* page명 수정 필요 */}
          저장
        </Button>
        {/* 저장하면 상세페이지로 이동, 페이지명 수정 필요 */}
        <Button onClick={() => navigate('/')}>취소</Button>
        {/* 취소하면 홈으로 이동*/}
      </form>
    </Boxes >
      ;
    </>
  );
}
