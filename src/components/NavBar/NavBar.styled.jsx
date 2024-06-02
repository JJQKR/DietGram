import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
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
  //margin-right: 30px;
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
