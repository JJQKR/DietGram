import React, { useEffect, useState } from 'react'
import * as S from './SignUpForm.styled'

const SignUpForm = () => {
    const loadUsers = () => {
        const loadedUsers = JSON.parse(localStorage.getItem("users"));
        if (loadedUsers) {
            return loadedUsers;
        }
        if (!loadedUsers) {
            return [];
        }
    };
    const [users, setUsers] = useState(loadUsers());

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

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setIsEmailValid(true);
        setIsPasswordValid(true);
        setIsPasswordConfirmValid(true);
        setIsNickNameValid(true);

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

        const newUser = {
            email,
            password,
            nickName,
        };

        const prevUserEmail = loadUsers().find(user => user.email === newUser.email);
        if (prevUserEmail) {
            setEmailSpanMessage("이미 존재하는 이메일입니다!");
            return setIsEmailValid(false);
        }

        const prevUserNickName = loadUsers().find(user => user.nickName === newUser.nickName);
        if (prevUserNickName) {
            setNickNameSpanMessage("이미 존재하는 닉네임입니다!");
            return setIsNickNameValid(false);
        }

        setUsers(prevUsers => [...prevUsers, newUser]);

        setEmail("");
        setPassword("");
        setPasswordConfirm("");
        setNickName("");

        alert(`${nickName}님 환영합니다!`);
    };

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users))
    }, [users])

    return (
        <>
            <S.Form onSubmit={handleSubmitForm}>
                <S.InputBox>
                    <label htmlFor="email">이메일</label>
                    <S.Input
                        id="email"
                        name="email"
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
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </S.InputBox>
                <S.Span $display={isPasswordValid}>비밀번호는 8자이상 입력해주세요!</S.Span>
                <S.InputBox>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <S.Input
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                </S.InputBox>
                <S.Span $display={isPassWordConfirmValid}>비밀번호와 동일하게 입력해주세요!</S.Span>
                <S.InputBox>
                    <label htmlFor="nickName">닉네임</label>
                    <S.Input
                        id="nickName"
                        name="nickName"
                        type="text"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                    />
                </S.InputBox>
                <S.Span $display={isNickNameValid}>{nickNameSpanMessage}</S.Span>
                <S.Button type="submit">회원가입</S.Button>
            </S.Form>
        </>
    )
}

export default SignUpForm