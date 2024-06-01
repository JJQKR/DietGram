import React, { useState } from 'react'
import * as S from './LoginForm.styled'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handleSubmitLoginForm = (event) => {
        event.preventDefault();
        setIsEmailValid(true);
        setIsPasswordValid(true);

        const loadedUsers = JSON.parse(localStorage.getItem("users"));
        const validUser = loadedUsers.find(user => user.email === email);

        // 해당 이메일의 user가 있는지 검사
        // 없다면 확인 span이 나타남
        if (!validUser) {
            return setIsEmailValid(false);
        }
        // user의 비밀번호가 일치하는지 검사
        // 일치하지 않는다면 확인 span이 나타남
        if (validUser.password !== password) {
            return setIsPasswordValid(false);
        }
        // 로그인 성공
        alert(`${validUser.nickName}님 반갑습니다!`);
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
                <S.Span $display={isEmailValid}>이메일을 정확히 입력한 것이 맞는지 확인해주세요!</S.Span>
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
                    <S.Button $color="green" type="button">회원가입</S.Button>
                    {/* 회원가입 버튼 클릭 시 회원가입 페이지로 이동 */}
                </S.ButtonDiv>
            </S.Form>
        </>
    )
}

export default LoginForm