import styled from 'styled-components';

export const DetailPostUserComment = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  overflow-y: auto;
`;

export const DetailCommentUserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const DetailCommentUserName = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailUserImage = styled.img`
  width: 40px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;

export const PostGuest = styled.div`
  font-size: 13px;
`;

export const CommentDate = styled.span`
  font-size: 10px;
  color: gray;
`;

export const PostComment = styled.p`
  margin-top: 5px;
  font-size: 15px;
`;

export const CommentButtonBox = styled.div`
  max-width: 71px;
  width: 100%;
`;

export const CommentButton = styled.button`
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: gray;
  display: ${(props) => (props.$hidden ? 'block' : 'none')};
`;
