import styled from 'styled-components';

export const ButtonList = styled.button`
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  left: 380px;
  padding-top: 10px;
  border: none;
  background-color: transparent;
`;

export const Button = styled.button`
  height: 30px;
  font-size: 20px;
  font-family: 'SUITE-Regular';
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-bottom: ${(props) => (props.$active ? '1px solid black' : 'none')};

  &:hover {
    border-bottom: ${(props) => (props.$active ? '1px solid black' : 'none')};
  }
`;
