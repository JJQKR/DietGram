import styled from 'styled-components';

export const ButtonList = styled.button`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  border: none;
  background-color: transparent;
`;

export const Button = styled.button`
  height: 30px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
`;
