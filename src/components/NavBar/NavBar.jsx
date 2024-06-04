import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import * as S from "./NavBar.styled";

const NavBar = () => {
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
          <S.BackBtn src={"/img/back-arrow-navigation.png"} />
          <Link to="/signup">
            <S.Menu>Sign Up</S.Menu>
          </Link>
          {logInItem()}
        </S.LeftSection>
        <Link to="/">
          <S.Title>살과 칼로리의 행방불명</S.Title>
        </Link>
        <S.RightSection>
          <Link to="/mypost">
            <S.Menu>My Posts</S.Menu>
          </Link>
          <Link to="/profile">
            <S.Menu>My Page</S.Menu>
          </Link>
        </S.RightSection>
      </S.Container>
    </>
  );
};
export default NavBar;
