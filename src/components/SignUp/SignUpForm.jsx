import React, { useEffect, useRef, useState } from 'react';
import { supabase } from '../../supabase/supabase';
import { checkLengthValidation, checkEqualValidation } from './signUpValidation';
import * as S from './SignUpForm.styled';
import { changeUserInfo, changeValue, initFormData } from '../../redux/slices/form.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const formData = useSelector((state) => state.formData);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const emailRef = useRef();
  const spanRef = useRef([]);

  useEffect(() => {
    emailRef.current.focus();
    spanRef.current[0].style.display = 'none';
    spanRef.current[1].style.display = 'none';
    spanRef.current[2].style.display = 'none';
    spanRef.current[3].style.display = 'none';
  }, []);

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    const { email, password, nickName } = formData;
    const action = changeUserInfo({ email, password, nickName });
    dispatch(action);

    if (!checkLengthValidation(email, 1)) {
      dispatch(changeValue({ type: 'email', content: '' }));
      return (spanRef.current[0].style.display = 'block');
    }
    if (!checkLengthValidation(password, 6)) {
      dispatch(changeValue({ type: 'password', content: '' }));
      return (spanRef.current[1].style.display = 'block');
    }
    if (!checkEqualValidation(password, passwordConfirm)) return (spanRef.current[2].style.display = 'block');
    if (!checkLengthValidation(nickName, 1)) {
      dispatch(changeValue({ type: 'nickName', content: '' }));
      return (spanRef.current[3].style.display = 'block');
    }

    try {
      const { data, error } = await supabase.login.signUp(email, password, nickName);
      if (error) {
        console.error(error);
      } else {
        const { user } = data;
        const user_id = user.id;
        const user_nickName = user.user_metadata.nickName;
        supabase.login.insertUser(user_id, user_nickName);
        dispatch(initFormData());
        alert('환영합니다 로그인 하실래요?');
        navigator('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmitSignUpForm}>
        <S.InputBox>
          <S.Label htmlFor="email">이메일</S.Label>
          <S.Input
            id="email"
            type="email"
            ref={emailRef}
            onChange={(e) => {
              const action = changeValue({ type: 'email', content: e.target.value });
              dispatch(action);
            }}
          />
        </S.InputBox>
        <S.Span ref={(el) => (spanRef.current[0] = el)}>이메일을 입력해주세요!</S.Span>
        <S.InputBox>
          <S.Label htmlFor="password">비밀번호</S.Label>
          <S.Input
            id="password"
            type="password"
            onChange={(e) => {
              const action = changeValue({ type: 'password', content: e.target.value });
              dispatch(action);
            }}
          />
        </S.InputBox>
        <S.Span ref={(el) => (spanRef.current[1] = el)}>비밀번호는 6자이상 입력해주세요!</S.Span>
        <S.InputBox>
          <S.Label htmlFor="passwordConfirm">비밀번호 확인</S.Label>
          <S.Input
            id="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </S.InputBox>
        <S.Span ref={(el) => (spanRef.current[2] = el)}>비밀번호와 동일하게 입력해주세요!</S.Span>
        <S.InputBox>
          <S.Label htmlFor="nickName">닉네임</S.Label>
          <S.Input
            id="nickName"
            type="text"
            onChange={(e) => {
              const action = changeValue({ type: 'nickName', content: e.target.value });
              dispatch(action);
            }}
          />
        </S.InputBox>
        <S.Span ref={(el) => (spanRef.current[3] = el)}>닉네임을 입력해주세요!</S.Span>
        <S.Button type="submit">회원가입</S.Button>
      </S.Form>
    </>
  );
};

export default SignUpForm;
