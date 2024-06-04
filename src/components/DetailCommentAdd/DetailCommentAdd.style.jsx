import styled from 'styled-components';

export const DetailPostCommentInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top: 1px solid lightgray;
`;

export const CommentInput = styled.input`
  max-width: 400px;
  width: 100%;
  height: 15px;
  margin: 10px;
  padding: 5px;
`;

export const CommentAddButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 80px;
  height: 30px;
  margin-right: 10px;
`;
