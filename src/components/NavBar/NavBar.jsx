import { Outlet, useNavigate } from "react-router-dom";
import * as S from "./NavBar.styled";

const NavBar = () => {
  const navigate = useNavigate();

  const handleBackBtn = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const handleSignupBtn = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleLoginBtn = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleTitleCick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleMypostsBtn = (e) => {
    e.preventDefault();
    navigate("/myposts");
  };

  const handleMypageBtn = (e) => {
    e.preventDefault();
    navigate("/mypage");
  };

  return (
    <>
      <S.Container>
        <S.LeftSection>
          <S.BackBtn
            src={"/img/back-arrow-navigation.png"}
            onClick={handleBackBtn}
          />
          <S.Menu onClick={handleSignupBtn}>Sign Up</S.Menu>
          <S.Menu onClick={handleLoginBtn}>Login</S.Menu>
        </S.LeftSection>
        <S.Title onClick={handleTitleCick}>살과 칼로리의 행방불명</S.Title>
        <S.RightSection>
          <S.Menu onClick={handleMypostsBtn}>My Posts</S.Menu>
          <S.Menu onClick={handleMypageBtn}>My Page</S.Menu>
        </S.RightSection>
      </S.Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default NavBar;
