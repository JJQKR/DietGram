import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/slices/currentUser.slice";
import { supabase } from "../../supabase/supabase";
import * as S from "./LoginForm.styled";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.currentUser);
  console.log(currentUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmitLoginForm = async (event) => {
    event.preventDefault();
    setIsEmailValid(true);
    setIsPasswordValid(true);

    try {
      const { data, error } = await supabase.login.signInWithPassword(email, password);
      if (error) {
        alert("이메일과 비밀번호를 확인해주세요!");
      } else {
        alert("로그인 되었습니다!");
        console.log(data);
        const { user } = data;
        dispatch(getCurrentUser(user));
        console.log(currentUser);
      }
    } catch (error) {
      alert("네트워크 이슈");
    }
  };

  return (
    <>
      <S.Form onSubmit={handleSubmitLoginForm}>
        <S.InputBox>
          <label htmlFor="email">이메일</label>
          <S.Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.InputBox>
        <S.Span $display={isEmailValid}>
          이메일을 정확히 입력한 것이 맞는지 확인해주세요!
        </S.Span>
        <S.InputBox>
          <label htmlFor="password">비밀번호</label>
          <S.Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputBox>
        <S.Span $display={isPasswordValid}>비밀번호를 확인해주세요!</S.Span>
        <S.ButtonDiv>
          <S.Button type="submit">로그인</S.Button>
          {/* 로그인 성공 시 메인 페이지로 이동? */}
          <S.Button $color="green" type="button">
            회원가입
          </S.Button>
          {/* 회원가입 버튼 클릭 시 회원가입 페이지로 이동 */}
        </S.ButtonDiv>
      </S.Form>
    </>
  );
};

export default LoginForm;
