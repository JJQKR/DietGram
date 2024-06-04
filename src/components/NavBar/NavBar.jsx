import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../supabase/supabase";
import * as S from "./NavBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../redux/slices/user.slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.user.isLogin);
  console.log(loginState);

  useEffect(() => {
    const checkIsLogin = async () => {
      const check = await supabase.login.checkSignIn();
      check ? dispatch(checkLogin(true)) : dispatch(checkLogin(false));
    };
    checkIsLogin();
  }, []);


  const logInItem = () => {
    if (loginState) {
      return (
        <S.Menu
          onClick={async () => {
            await supabase.login.signOut();
            dispatch(checkLogin(false));
            alert("로그아웃 되었습니다!");
          }}
        >
          LogOut
        </S.Menu>
      );
    }
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
