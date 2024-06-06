import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supabase/supabase';
import { changeValue, initFormData } from '../redux/slices/form.slice';
import { initPostList } from '../redux/slices/posts.slice';

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: green;
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
  const formData = useSelector((state) => state.formData);
  const filteredPost = posts.find((post) => post.id === +editId);

  useEffect(() => {
    dispatch(changeValue({ type: 'menu', content: filteredPost.menu }));
    dispatch(changeValue({ type: 'content', content: filteredPost.content }));
    dispatch(changeValue({ type: 'date', content: filteredPost.date }));
    dispatch(changeValue({ type: 'kcal', content: filteredPost.kcal }));
    dispatch(changeValue({ type: 'rating', content: filteredPost.price }));
    dispatch(changeValue({ type: 'price', content: filteredPost.price }));
    dispatch(changeValue({ type: 'place', content: filteredPost.place }));
  }, []);

  const handleChangePost = async (event) => {
    event.preventDefault();

    // 유효성 검사
    const { menu, content, date, kcal, rating, price, place } = formData;
    console.log(typeof rating);

    if (!menu.trim()) return alert('메뉴를 입력해주세요!');
    if (!content.trim()) return alert('내용을 입력해주세요!');
    if (!date.trim()) return alert('날짜를 입력해주세요!');
    if (+kcal < 0) return alert('유효한 칼로리를 입력해주세요!');
    if (+rating < 0 || +rating > 5) return alert('평점을 0점 이상, 5점 이하로 입력해주세요!');
    if (+price < 0) return alert('유효한 금액을 입력해주세요!');
    if (!place.trim()) return alert('장소를 입력해주세요!');

    try {
      const { data, error } = await supabase.post.updateServerPost(editId, formData);
      if (error) {
        console.error(error);
      } else {
        console.log(data);
        navigate('/mypost');
        const posts = await supabase.post.getPosts();
        dispatch(initPostList(posts));
        dispatch(initFormData()); // 폼초기화
      }
    } catch (error) {
      console.error(error);
    }
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
        <form onSubmit={handleChangePost}>
          <InnerContainer>
            <Left>
              <Img />
              <label htmlFor="fileTest">
                <FileSpan>파일 업로드하기</FileSpan>
              </label>
              <input id="fileTest" type="file" style={{ display: 'none' }} accept="image/*"></input>

              <Label htmlFor="postMenu">메뉴</Label>
              <Input
                id="postMenu"
                width="440"
                type="text"
                defaultValue={filteredPost.menu}
                onChange={(e) => {
                  dispatch(changeValue({ type: 'menu', content: e.target.value }));
                }}
              />

              <Label htmlFor="postDescription">내용</Label>
              <Textarea
                id="postDescription"
                defaultValue={filteredPost.content}
                onChange={(e) => {
                  dispatch(changeValue({ type: 'content', content: e.target.value }));
                }}
              ></Textarea>
              {/* 댓글에서 사용될 수도 있는 textarea와 스타일 맞추기  */}

              <Label htmlFor="postDate">날짜</Label>
              <Input
                id="postDate"
                width="440"
                type="date"
                defaultValue={filteredPost.date}
                onChange={(e) => dispatch(changeValue({ type: 'date', content: e.target.value }))}
              />
            </Left>
            <Right>
              {/* 숫자이기만 하면 값 크기 제한 없게 */}
              <Label htmlFor="postCalories">칼로리</Label>
              <Input
                id="postCalories"
                type="number"
                defaultValue={filteredPost.kcal}
                onChange={(e) => dispatch(changeValue({ type: 'kcal', content: e.target.value }))}
              />

              <Label htmlFor="postRate">평점</Label>
              <Input
                id="postRate"
                type="number"
                defaultValue={filteredPost.raiting}
                onChange={(e) => dispatch(changeValue({ type: 'rating', content: e.target.value }))}
              />

              <Label htmlFor="postPrice">금액</Label>
              <Input
                id="postPrice"
                type="number"
                defaultValue={filteredPost.price}
                onChange={(e) => dispatch(changeValue({ type: 'price', content: e.target.value }))}
              />

              <Label htmlFor="postPlace">장소</Label>
              <Input
                id="postPlace"
                type="text"
                defaultValue={filteredPost.place}
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
