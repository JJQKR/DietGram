import React from 'react';
import { Section, Left, Right } from './UploadPost';
import styled from 'styled-components';
import { current } from '@reduxjs/toolkit';


export default function EditProfile() {

  const data = {
    
  }
  
  const 
  return (
    1. 업로드 눌렀을 때 내 컴퓨터 사진 올라가는지(type=file)
    2. 

    이미지가 들어갈
    localStorage 사용 보다는 dummy data로
    
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
