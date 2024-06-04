import styled from 'styled-components';

export const DetailPostDataList = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
  padding: 30px;
`;

export const DetailPostImage = styled.img`
  width: 500px;
`;

export const DetailPostText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailPostInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: left;
  gap: 5px;
`;

export const PostDate = styled.p`
  font-size: 13px;
  color: gray;
`;

export const PostGrade = styled.p`
  margin-top: 8px;
  font-size: 15px;
`;
