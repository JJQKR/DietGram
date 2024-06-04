import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: #ffbf9c;
  color: white;
  font-weight: 600;
`;

export const LeftSection = styled.ul`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackBtn = styled.img`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
`;

export const TitleSection = styled.div`
  width: 540px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: white;
  font-size: 65px;
  font-weight: 100;
  font-family: "BagelFatOne-Regular";
  text-shadow: 0px 3px 10px #c57950;
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
