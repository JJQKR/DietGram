import styled from 'styled-components';

export const Post = styled.div`
  margin: 30px auto;
  max-width: 510px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: 10px;
`;

export const PostList = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const PostTimeCalorie = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  margin-top: 30px;
  padding-left: 10px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
`;
