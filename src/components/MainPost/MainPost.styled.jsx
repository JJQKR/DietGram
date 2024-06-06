import styled from 'styled-components';

export const Post = styled.div`
  margin: 30px auto;
  max-width: 510px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  padding: 15px;
  border-radius: 10px;
`;

export const PostList = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
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
  margin-top: 10px;
  margin-right: 5px;
  line-height: 120%;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.p`
  margin-top: 17px;
  padding-left: 12px;
  font-size: 18px;
`;

export const PostImage = styled.img`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;
