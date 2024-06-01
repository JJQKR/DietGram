import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 200px;
  background-color: #ffbf9c;
`;

export const TitleSection = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #ffaa7d;
`;

export const Title = styled.h1`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  padding-top: 60px;
  color: white;
  font-size: 70px;
  font-family: "BagelFatOne-Regular";
  text-shadow: 0px 3px 10px #c57950;
`;

export const Navbar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 600;
`;

export const LeftSection = styled.ul`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-right: 30px;
`;

export const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  background-image: url("/img/back-arrow-navigation.png"); // 질문
  cursor: pointer;
`;

export const RightSection = styled.ul`
  width: 210px;
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
`;

export const Menu = styled.li`
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
