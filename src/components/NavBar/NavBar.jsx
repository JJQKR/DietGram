import { Link, Outlet, useNavigate } from "react-router-dom";
import * as S from "./NavBar.styled";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabase";

const NavBar = () => {
  const navigate = useNavigate();
  const handleBackBtn = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const [isLogIn, setIsLogIn] = useState(false);
  useEffect(() => {
    const checkIsLogin = async () => {
      const check = await supabase.login.checkSignIn();
      check ? setIsLogIn(true) : setIsLogIn(false);
      console.log("check", check);
    };
    checkIsLogin();
  }, []);
  console.log("isLogIn", isLogIn);
  const logInItem = () => {
    if (isLogIn) {
      return (
        <S.Menu
          onClick={async () => {
            await supabase.login.signOut();
            setIsLogIn(false);
          }}
        >
          LogOut
        </S.Menu>
      );
    }
    setIsLogIn(true);
    return (
      <Link to="/login">
        <S.Menu>LogIn</S.Menu>
      </Link>
    );
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
          {logInItem()}
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
