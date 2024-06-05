import styled from 'styled-components';

export const NewPostButton = styled.button`
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  font-size: 40px;
  background-color: #d9d9d9;
  position: fixed;
  right: 150px;
  top: 110px;

  &:hover {
    background-color: gray;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
