import styled from 'styled-components';

export const Form = styled.form`
  width: 900px;
  margin: 100px auto;

  background-color: #e7e7e7;
  border-radius: 20px;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 5px #b5b5b5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  margin-left: 3px;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 760px;
  height: 60px;
  border: none;
  margin-right: 10px;
  background-color: #d9d9d9;
  border-radius: 15px;
  box-shadow: 0px 2px 5px #cccccc;
  text-indent: 15px;
  font-size: 18px;
  font-family: 'SUITE-Regular';
  &:focus {
    outline: none;
    background-color: #cacaca;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  background-color: #0084fd;
  color: white;
  font-size: 17px;
  font-family: 'SUITE-REGULAR';
  border-radius: 10px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Span = styled.span`
  color: #ff6600;
  margin-right: 390px;
  font-size: 17px;
`;
