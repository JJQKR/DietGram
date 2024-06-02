import styled from "styled-components";

export const PostsNumber = styled.h1`
  width: 500px;
  height: 120px;
  display: flex;
  justify-content: left;
  align-items: center;
  text-indent: 50px;
  //background-color: #353535;
  font-size: 30px;
  font-weight: 500;
`;

export const Boxes = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

export const Post = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 20px;
  background-color: #f4f4f4;
`;

export const ProfileBox = styled.div`
  width: 350px;
  height: 70px;
  display: flex;
  flex-direction: left;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

export const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: black;
`;

export const Nickname = styled.p`
  text-indent: 10px;
  font-size: 18px;
`;

export const FoodImage = styled.img`
  width: 350px;
  height: 350px;
  border-bottom: 1px solid #e5e5e5;
`;
