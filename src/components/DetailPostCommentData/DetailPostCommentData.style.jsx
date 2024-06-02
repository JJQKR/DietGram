import styled from 'styled-components';

export const DetailPostComment = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`;

export const DetailPostUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;

export const DetailPostUserName = styled.div`
  display: flex;
`;

export const DetailPostUserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;

export const PostUser = styled.p`
  margin-top: 30px;
`;

export const DetailPostUserComment = styled.div`
  display: flex;
  flex-direction: column;
  height: 330px;
  overflow-y: auto;
`;

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

export const DetailCommentUserName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const DetailCommentUserBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const EditButton = styled.button`
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: gray;
`;

export const DetailUserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;

export const PostGuest = styled.div`
  font-size: 13px;
`;

export const CommentDate = styled.span`
  font-size: 13px;
  color: gray;
`;

export const PostComment = styled.p`
  margin-top: 5px;
  font-size: 15px;
`;

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
  width: 80px;
  height: 30px;
  margin-right: 10px;
`;
