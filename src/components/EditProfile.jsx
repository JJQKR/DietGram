import React from 'react';
import { Section, Left, Right } from './UploadPost';
import styled from 'styled-components';
import { current } from '@reduxjs/toolkit';


export default function EditProfile() {

  const 
  return (
    <>
      <Section>
        <Left>
          <button>프로필 이미지 업로드</button>
          <button>이미지 제거</button>
        </Left>
        <Right>
          현재 닉네임
          {currentNickname}
          <form onSubmit={handleChangeProfile}>
            <label htmlFor="NewNickname"></label>
            <input className="NewNickname" type="text"></input>
            {/* 중복 검사 필요 */}

            <button type="submit">수정</button>
          </form>
          <button>취소</button>
        </Right>
      </Section>
    </>
  );
}
