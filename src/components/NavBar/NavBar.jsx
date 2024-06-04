import { Outlet } from "react-router-dom";
import * as S from "./NavBar.styled";

const NavBar = () => {
  // const navigate = useNavigate();

  // const handleBackBtn = (e) => {
  //   e.preventDefault();
  //   navigate(-1);
  // };

  // const handleSignupBtn = (e) => {
  //   e.preventDefault();
  //   navigate("/signup");
  // };

  // const handleLoginBtn = (e) => {
  //   e.preventDefault();
  //   navigate("/login");
  // };

  // const handleTitleCick = (e) => {
  //   e.preventDefault();
  //   navigate("/");
  // };

  // const handleMypostsBtn = (e) => {
  //   e.preventDefault();
  //   navigate("/myposts");
  // };

  // const handleMypageBtn = (e) => {
  //   e.preventDefault();
  //   navigate("/mypage");
  // };

  return (
    <>
      <S.Container>
        <S.LeftSection>
          <S.BackBtn src={"/img/back-arrow-navigation.png"} />
          <S.Menu>Sign Up</S.Menu>
          <S.Menu>Login</S.Menu>
        </S.LeftSection>
        <S.Title>살과 칼로리의 행방불명</S.Title>
        <S.RightSection>
          <S.Menu>My Posts</S.Menu>
          <S.Menu>My Page</S.Menu>
        </S.RightSection>
      </S.Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default NavBar;
