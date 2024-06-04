import { Link, useNavigate } from "react-router-dom";
import * as S from "./NavBar.styled";

const NavBar = () => {
  const navigate = useNavigate();
  const handleBackBtn = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
      <S.Container>
        <S.LeftSection>
          <S.BackBtn
            src={"/img/back-arrow-navigation.png"}
            onClick={handleBackBtn}
          />
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <S.Menu>Sign Up</S.Menu>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <S.Menu>Login</S.Menu>
          </Link>
        </S.LeftSection>
        <Link to="/" style={{ textDecoration: "none" }}>
          <S.Title>살과 칼로리의 행방불명</S.Title>
        </Link>
        <S.RightSection>
          <Link to="/mypost" style={{ textDecoration: "none" }}>
            <S.Menu>My Posts</S.Menu>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <S.Menu>My Page</S.Menu>
          </Link>
        </S.RightSection>
      </S.Container>
    </>
  );
};
export default NavBar;
