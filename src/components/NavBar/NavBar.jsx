import { Link, Outlet, useNavigate } from 'react-router-dom';
import * as S from './NavBar.styled';
import { useEffect, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin, getCurrentUser } from '../../redux/slices/user.slice';

const NavBar = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.user.isLogin);
  const { currentUser } = useSelector(state => state.user);
  console.log(currentUser);

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
            dispatch(getCurrentUser(null));
            alert('로그아웃 되었습니다!');
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
          <S.BackBtn src={'/img/back-arrow-navigation.png'} />
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <S.Menu>Sign Up</S.Menu>
          </Link>
          {logInItem()}
        </S.LeftSection>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <S.Title>살과 칼로리의 행방불명</S.Title>
        </Link>
        <S.RightSection>
          <Link to="/mypost" style={{ textDecoration: 'none' }}>
            <S.Menu>My Posts</S.Menu>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <S.Menu>My Page</S.Menu>
          </Link>
        </S.RightSection>
      </S.Container>
    </>
  );
};
export default NavBar;
