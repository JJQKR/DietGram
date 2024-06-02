import * as S from "./NavBar.styled";

const NavBar = () => {
  return (
    <S.Container>
      <S.LeftSection>
        <S.BackBtn src={"/img/back-arrow-navigation.png"} />
        <S.Menu>Sign Up</S.Menu>
        <S.Menu>Login</S.Menu>
      </S.LeftSection>
      <S.RightSection>
        <S.Menu>My Posts</S.Menu>
        <S.Menu>My Page</S.Menu>
      </S.RightSection>
    </S.Container>
  );
};
export default NavBar;
