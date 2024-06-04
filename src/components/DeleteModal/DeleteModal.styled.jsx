import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  width: 360px;
  height: 220px;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  position: fixed;
`;

export const DeleteTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 50px;
`;

export const DeleteMent = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #6f6f6f;
  margin-top: 35px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 55px;
  margin-top: 30px;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 15px;
  font-size: 13px;
  font-weight: bold;
  font-family: "SUITE-Regular";
  &:hover {
    background-color: #b1b1b1;
    transition: 0.3s;
    cursor: pointer;
  }
`;
