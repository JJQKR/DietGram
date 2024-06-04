import React, { useState } from "react";
import { supabase } from "../../supabase/supabase";
import * as S from "./SignUpForm.styled";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickName, setNickName] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPassWordConfirmValid, setIsPasswordConfirmValid] = useState(true);
  const [isNickNameValid, setIsNickNameValid] = useState(true);

  const [emailSpanMessage, setEmailSpanMessage] = useState("");
  const [nickNameSpanMessage, setNickNameSpanMessage] = useState("");

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setIsPasswordConfirmValid(true);
    setIsNickNameValid(true);

    // 유효성 검사
    // 실패 시 설정한 문구가 인풋 아래에 나타남
    if (!email.trim()) {
      setEmailSpanMessage("이메일을 입력해주세요!");
      return setIsEmailValid(false);
    }
    if (password.trim().length < 8) {
      return setIsPasswordValid(false);
    }
    if (password.trim() !== passwordConfirm.trim()) {
      return setIsPasswordConfirmValid(false);
    }
    if (!nickName.trim()) {
      setNickNameSpanMessage("닉네임을 입력해주세요!");
      return setIsNickNameValid(false);
    }

    try {
      const { data, error } = await supabase.login.signUp(email, password, nickName);
      console.log(data);
      if (error) {
        console.error(error);
      } else {
        alert("환영합니다 로그인 하실래요?");
        // 회원가입 성공하면 로그인 페이지로?
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmitSignUpForm}>
        <S.InputBox>
          <label htmlFor="email">이메일</label>
          <S.Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputBox>
        <S.Span $display={isEmailValid}>{emailSpanMessage}</S.Span>
        <S.InputBox>
          <label htmlFor="password">비밀번호</label>
          <S.Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputBox>
        <S.Span $display={isPasswordValid}>
          비밀번호는 8자이상 입력해주세요!
        </S.Span>
        <S.InputBox>
          <label htmlFor="passwordConfirm">비밀번호 확인</label>
          <S.Input
            id="passwordConfirm"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </S.InputBox>
        <S.Span $display={isPassWordConfirmValid}>
          비밀번호와 동일하게 입력해주세요!
        </S.Span>
        <S.InputBox>
          <label htmlFor="nickName">닉네임</label>
          <S.Input
            id="nickName"
            type="text"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
          />
        </S.InputBox>
        <S.Span $display={isNickNameValid}>{nickNameSpanMessage}</S.Span>
        <S.Button type="submit">회원가입</S.Button>
      </S.Form>
    </>
  );
};

export default SignUpForm;
