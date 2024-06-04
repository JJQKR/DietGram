import styled from 'styled-components';

export const PostLikeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  padding: 5px;
  border-top: 1px solid lightgray;
`;

export const PostLikeButton = styled.p`
  color: red;
  font-size: 30px;
  padding: 5px;
  cursor: pointer;

  &:hover {
  }
`;
