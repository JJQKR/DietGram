import styled from 'styled-components';

export const DetailPostUserInformation = styled.div`
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
  border: 1px solid lightgray;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
`;

export const PostUser = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-top: 30px;
`;
