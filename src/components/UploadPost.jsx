import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { initFormData, changeValue } from '../redux/slices/form.slice';
import { insertPost } from '../redux/slices/posts.slice';
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

const reader = new FileReader();

export default function UploadPost() {
  const [newPostImage, setNewPostImage] = useState('');
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  console.log(formData);

  const handleAddPost = async (event) => {
    // const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    // if (datePattern.test(newDate)) {
    //   alert('날짜를 YYYY-MM-DD 형식으로 입력해주세요.');
    //   //sweetAlert 쓰고 싶다
    //   return;
    // }

    // const parsedPrice = parseInt(newPrice, 10);
    // if (!newMenu || parsedPrice <= 0) {
    //   alert('유효한 메뉴과 금액을 입력해주세요.');
    //   return;
    // }
    event.preventDefault();

    // const newPost = {
    //   id: uuidv4(),
    //   // newPostImage,
    //   menu,
    //   content,
    //   date,
    //   kcal,
    //   rating,
    //   price,
    //   place
    // };

    try {
      const { data, error } = await supabase.post.insertServerPost(formData);
      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }

    // setNewPostImage('');
    // dietgram-images
  };

  const handleSaveImageFile = (event) => {
    const { files } = event.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      console.log(reader.result);
      setNewPostImage(reader.result);
    };
  };

  const uploadTest = async (file) => {
    try {
      const { data, error } = await supabase.post.uploadServerImage(file);
      if (error) {
        console.error(error);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
        <form onSubmit={handleAddPost}>
          <InnerContainer>
            <Left>
              <Img src={newPostImage} />
              <label htmlFor="fileTest">
                <FileSpan>파일 업로드하기</FileSpan>
              </label>
              <input
                id="fileTest"
                type="file"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleSaveImageFile}
              ></input>

              <Label htmlFor="postMenu">메뉴</Label>
              <Input
                id="postMenu"
                width="440"
                type="text"
                onChange={(e) => dispatch(changeValue({ type: 'menu', content: e.target.value }))}
              />

              <Label htmlFor="postDescription">내용</Label>
              <Textarea
                id="postDescription"
                onChange={(e) => dispatch(changeValue({ type: 'content', content: e.target.value }))}
              ></Textarea>
              {/* 댓글에서 사용될 수도 있는 textarea와 스타일 맞추기  */}

              <Label htmlFor="ateDate">날짜</Label>
              <Input
                id="ateDate"
                width="440"
                type="date"
                placeholder="날짜"
                onChange={(e) => dispatch(changeValue({ type: 'date', content: e.target.value }))}
              />
            </Left>
            <Right>
              {/* 숫자이기만 하면 값 크기 제한 없게 */}
              <Label htmlFor="postCalories">칼로리</Label>
              <Input
                id="postCalories"
                type="number"
                onChange={(e) => dispatch(changeValue({ type: 'kcal', content: e.target.value }))}
              />

              <Label htmlFor="postRate">평점</Label>
              <Input
                id="postRate"
                type="number"
                onChange={(e) => dispatch(changeValue({ type: 'rating', content: e.target.value }))}
              />

              <Label htmlFor="postPrice">금액</Label>
              <Input
                id="postPrice"
                type="number"
                onChange={(e) => dispatch(changeValue({ type: 'price', content: e.target.value }))}
              />

              <Label htmlFor="postPlace">장소</Label>
              <Input
                id="postPlace"
                type="text"
                onChange={(e) => dispatch(changeValue({ type: 'place', content: e.target.value }))}
              />
              <Button type="submit">저장</Button>
            </Right>
          </InnerContainer>
        </form>
      </Container>
    </>
  );
}
