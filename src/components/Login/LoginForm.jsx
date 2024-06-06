import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeValue, initFormData } from '../../redux/slices/form.slice';
import { checkLogin, getCurrentUser } from '../../redux/slices/user.slice';
import { supabase } from '../../supabase/supabase';
import { checkLengthValidation } from '../SignUp/signUpValidation';
import * as S from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const formData = useSelector((state) => state.formData);
  const emailRef = useRef();
  const spanRef = useRef([]);

  useEffect(() => {
    emailRef.current.focus();
    spanRef.current[0].style.display = 'none';
    spanRef.current[1].style.display = 'none';
  }, []);

  const handleSubmitLoginForm = async (event) => {
    event.preventDefault();
    const { email, password } = formData;

    if (!checkLengthValidation(email, 1)) {
      dispatch(changeValue({ type: 'email', content: '' }));
      return (spanRef.current[0].style.display = 'block');
    }
    if (!checkLengthValidation(password, 6)) {
      dispatch(changeValue({ type: 'password', content: '' }));
      return (spanRef.current[1].style.display = 'block');
    }

    try {
      const { data, error } = await supabase.login.signInWithPassword(email, password);
      if (error) {
        alert('이메일과 비밀번호를 확인해주세요!');
      } else {
        alert('로그인 되었습니다!');
        navigator('/');
        const { user } = data;
        dispatch(initFormData());
        dispatch(getCurrentUser(user));
        dispatch(checkLogin(true));
      }
    } catch (error) {
      alert('네트워크 이슈');
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmitLoginForm}>
        <S.InputBox>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input
            id="email"
            type="email"
            ref={emailRef}
            onChange={(e) => {
              const action = changeValue({
                type: 'email',
                content: e.target.value
              });
              dispatch(action);
            }}
          />
        </S.InputBox>
        <S.Span ref={(el) => (spanRef.current[0] = el)}>이메일을 정확히 입력한 것이 맞는지 확인해주세요!</S.Span>
        <S.InputBox>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.Input
            id="password"
            type="password"
            onChange={(e) => {
              const action = changeValue({
                type: 'password',
                content: e.target.value
              });
              dispatch(action);
            }}
          />
        </S.InputBox>
        <S.Span ref={(el) => (spanRef.current[1] = el)}>비밀번호를 확인해주세요!</S.Span>
        <S.ButtonDiv>
          <S.Button $color="green" type="button" onClick={() => navigator('/signup')}>
            회원가입
          </S.Button>
          <S.Button type="submit">로그인</S.Button>
        </S.ButtonDiv>
      </S.Form>
    </>
  );
};

export default LoginForm;
