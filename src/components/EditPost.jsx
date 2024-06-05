import { useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changePost, deletePost } from '../redux/slices/postsSlice';
import { Boxes } from './GlobalStyle';
import { supabase } from '../supabase/supabase';

export const Button = styled.button`
  border: none;
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const InnerContainer = styled.div`
  width: 1000px;
  height: 650px;
  margin: 5rem 1rem;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 5px #b5b5b5;
`;

const Left = styled.div`
  margin: 5% 0 5% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 530px;
  height: 560px;
  align-items: center;
`;

const Right = styled.div`
  margin: 5% 5% 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  width: 370px;
  height: 560px;
  gap: 10px;
`;

const Img = styled.img`
  width: 300px;
  height: 150px;
  object-fit: cover;
`;

const Label = styled.label`
  font-size: 24px;
`;

const Input = styled.input`
  width: ${(prop) => (prop.width ? `${prop.width}px` : '320px')};
  height: 55px;
  font-size: 20px;
  text-indent: 10px;
  border: none;
  border-radius: 15px;
  box-shadow: 0px 0px 5px #b5b5b5;
  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 440px;
  height: 160px;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  text-indent: 10px;
  box-shadow: 0px 0px 5px #b5b5b5;
  &:focus {
    outline: none;
  }
`;

const FileSpan = styled.span`
  border: black solid 1px;
  border-radius: 15px;
  padding: 5px;
`;

export default function EditPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { editId } = useParams();
  const posts = useSelector((state) => state.posts.postList);
  //console.log(posts);
  const filteredPost = posts.find((post) => post.id === +editId);

  //const selectedPost = posts.find((element) => element.id === id);
  //근데 selectedPost를 정하는 게, 상세페이지에서 넘어올 때도 필요한가?

  // const [postImage, setPostImage] = useState(selectedPost.postImage);
  // const [menu, setMenu] = useState(selectedPost.menu);
  // const [description, setDescription] = useState(selectedPost.description);
  // const [date, setDate] = useState(selectedPost.date);
  // const [calories, setCalories] = useState(selectedPost.calories);
  // const [rate, setRate] = useState(selectedPost.rate);
  // const [price, setPrice] = useState(selectedPost.price);
  // const [place, setPlace] = useState(selectedPost.place);

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
      <Container>
        <form>
          <InnerContainer>
            <Left>
              <Img />
              <label htmlFor="fileTest">
                <FileSpan>파일 업로드하기</FileSpan>
              </label>
              <input id="fileTest" type="file" style={{ display: 'none' }} accept="image/*"></input>

              <Label htmlFor="postMenu">메뉴</Label>
              <Input id="postMenu" width="440" type="text" defaultValue={filteredPost.menu} />

              <Label htmlFor="postDescription">내용</Label>
              <Textarea id="postDescription" defaultValue={filteredPost.content}></Textarea>
              {/* 댓글에서 사용될 수도 있는 textarea와 스타일 맞추기  */}

              <Label htmlFor="postDate">날짜</Label>
              <Input id="postDate" width="440" type="date" defaultValue={filteredPost.date} />
            </Left>
            <Right>
              {/* 숫자이기만 하면 값 크기 제한 없게 */}
              <Label htmlFor="postCalories">칼로리</Label>
              <Input id="postCalories" type="number" defaultValue={filteredPost.kcal} />

              <Label htmlFor="postRate">평점</Label>
              <Input id="postRate" type="number" defaultValue={filteredPost.raiting} />

              <Label htmlFor="postPrice">금액</Label>
              <Input id="postPrice" type="number" defaultValue={filteredPost.price} />

              <Label htmlFor="postPlace">장소</Label>
              <Input id="postPlace" type="text" defaultValue={filteredPost.place} />
              <Button type="submit">저장</Button>
            </Right>
          </InnerContainer>
        </form>
      </Container>
    </>
  );
}
