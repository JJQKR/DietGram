import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from '../../redux/slices/posts.slice';
import { checkLogin, getCurrentUser } from '../../redux/slices/user.slice';
import { supabase } from '../../supabase/supabase';
import * as S from './NavBar.styled';

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.user.isLogin);
  const loggedinUser = useSelector((state) => state.user.currentUser);

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
            navigate('/login');
          }}
        >
          LogOut
        </S.Menu>
      );
    }

    return (
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <S.Menu>LogIn</S.Menu>
      </Link>
    );
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleMypostsClick = () => {
    const action = selectUser(loggedinUser.id);
    dispatch(action);
  };

  return (
    <>
      <S.Container>
        <S.LeftSection>
          <S.BackBtn src={'/img/back-arrow-navigation.png'} onClick={handleBackButton} />
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <S.Menu>Sign Up</S.Menu>
          </Link>
          {logInItem()}
        </S.LeftSection>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <S.Title>살과 칼로리의 행방불명</S.Title>
        </Link>
        <S.RightSection>
          <Link to={`/mypost/${loggedinUser?.id}`} style={{ textDecoration: 'none' }}>
            <S.Menu onClick={handleMypostsClick}>My Posts</S.Menu>
          </Link>
          <Link to={`/profile/${loggedinUser?.id || ''}`} style={{ textDecoration: 'none' }}>
            <S.Menu>My Page</S.Menu>
          </Link>
        </S.RightSection>
      </S.Container>
    </>
  );
};
export default NavBar;
