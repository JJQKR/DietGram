import * as S from "./Header.styled";

const Header = () => {
  return (
    <>
      <S.Container>
        <S.TitleSection>
          <S.Title>살과 칼로리의 행방불명</S.Title>
        </S.TitleSection>
        <S.Navbar>
          <S.LeftSection>
            <S.BackBtn />
            <S.Menu>Sign Up</S.Menu> | <S.Menu>Login</S.Menu>
          </S.LeftSection>
          <S.RightSection>
            <S.Menu>My Posts</S.Menu> | <S.Menu>My Page</S.Menu>
          </S.RightSection>
        </S.Navbar>
      </S.Container>
    </>
  );
};

export default Header;
