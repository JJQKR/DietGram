import React from 'react'
import * as S from './SignUpForm.styled'

const SignUpForm = () => {
    return (
        <>
            <S.Form>
                <S.InputBox>
                    <label htmlFor="email">이메일</label>
                    <S.Input />
                </S.InputBox>
                <S.Span>이미 존재하는 이메일입니다!</S.Span>
                <S.InputBox>
                    <label htmlFor="password">비밀번호</label>
                    <S.Input />
                </S.InputBox>
                <S.Span>비밀번호는 최소 8자 이상 입력해주세요!</S.Span>
                <S.InputBox>
                    <label htmlFor="passwordConfirm">비밀번호 확인</label>
                    <S.Input />
                </S.InputBox>
                <S.Span>비밀번호를 동일하게 입력해주세요!</S.Span>
                <S.InputBox>
                    <label htmlFor="email">이메일</label>
                    <S.Input />
                </S.InputBox>
                <S.Span>이미 존재하는 닉네임입니다!</S.Span>
                <S.Button type="submit">회원가입</S.Button>
            </S.Form>
        </>
    )
}

export default SignUpForm