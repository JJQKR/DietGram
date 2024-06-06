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
  align-items: center;
  padding: 30px;
  gap: 10px;
`;

export const InputBox = styled.div`
  width: 90%;
  height: 90px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  border: none;
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

export const ButtonDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 30%;
  background-color: ${(props) => props.$color || '#0084FD'};
  margin-top: 30px;
  color: white;
  border: none;
  font-size: 17px;
  font-family: 'SUITE-REGULAR';
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const Span = styled.span`
  color: red;
`;
