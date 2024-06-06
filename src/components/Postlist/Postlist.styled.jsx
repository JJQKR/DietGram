import styled from 'styled-components';

export const PostsNumberBox = styled.div`
  display: flex;
  width: 1440px;
  margin: 0 auto;
`;

export const PostsNumber = styled.h1`
  width: 500px;
  height: 120px;
  display: flex;
  justify-content: left;
  align-items: center;
  text-indent: 50px;
  //padding-left: 40px;
  //background-color: #353535;
  font-size: 30px;
  font-weight: 500;
`;

export const Boxes = styled.div`
  width: 1440px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 60px;
`;

export const Post = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 20px;
  background-color: #f4f4f4;
  box-shadow: 0px 0px 5px #b5b5b5;
`;

export const ProfileBox = styled.div`
  width: 350px;
  height: 70px;
  display: flex;
  flex-direction: left;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

export const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 15px;
  background-color: white;
`;

export const Nickname = styled.p`
  text-indent: 20px;
  font-size: 20px;
  font-weight: 600;
`;

export const FoodFile = styled.img`
  width: 350px;
  height: 330px;
  object-fit: cover;
  border-bottom: 1px solid #e5e5e5;
`;

export const ContextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px 10px 0px;
`;

export const Fooditem = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
  width: 250px;
  height: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const FoodAverage = styled.p`
  font-size: 18px;
  margin-right: 20px;
`;

export const MiddleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3px;
`;

export const FoodKcal = styled.p`
  margin-left: 20px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 7px;
  margin-right: 20px;
`;

export const Button = styled.button`
  width: 40px;
  height: 25px;
  display: ${({ dataUserId, userId }) => (dataUserId === userId ? 'block' : 'none')};
  border-radius: 10px;
  border: none;
  background-color: #dcdcdc;
  font-size: 13px;
  font-family: 'SUITE-Regular';
  &:hover {
    background-color: #b1b1b1;
    transition: 0.3s;
    cursor: pointer;
  }
`;
