import React, { useState, useEffecect } from 'react';
import axios from 'axios';

//URL
//http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx

//샘플
//http://openapi.foodsafetykorea.go.kr/api/sample/I2790/xml/1/5

//인증키
//ca47080538bd4c6dbd83

//추가 요청 인자 있으면
//http://openapi.foodsafetykorea.go.kr/api/인증키/서비스명/요청파일타입/요청시작위치/요청종료위치/변수명=값&변수명=값2

//예시
//http://openapi.foodsafetykorea.go.kr/api/sample/I2790/xml/1/5/DESC_KOR=값 &RESEARCH_YEAR=값 &MAKER_NAME=값 &FOOD_CD=값 &CHNG_DT=값

//http://openapi.foodsafetykorea.go.kr/api/ca47080538bd4c6dbd83/I2790/JSON/시작행인덱스(숫자)/끝행인덱스(숫자)/DESC_KOR={}&NUTR_CONT1={}
//근데 왜 중간에서 물음표로 안 시작하지?


메뉴명을 정확히 입력해서 칼로리 안에 데이터 받아오기
fetch해서 결과물 console.log
axios 
요청시작부터 음식이름 적어서 요청 보내기 때문에
const userInput

const apiKey = 'ca47080538bd4c6dbd83';
const serviceName = 'I2790';
const requestType = 'JSON';
const startIndex = '요청시작위치';
const endIndex = '요청종료위치';
const queryString = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${serviceName}/${requestType}/${startIndex}/${endIndex}
DESC_KOR=${userInput}&NUTR_CONT1=${userInput}`;

const inputField = document.getElementById('inputField');
matchingItems.forEach((item) => {
  const option = document.createElement('option');
  option.value = item.descKor; // 또는 item.nutrientContent1
  option.text = item.descKor;
  inputField.add(option);
});

const Nutrient = () => {
  const [food, setFood] = useState('');
  const [kcal, setkcal] = useState('');

  //사용자가 입력한 텍스트와 매칭되는 음식, 칼로리 가져오는 함수 필요
  //아래 수정하기
  const getFood = (event) => {
    setFood(event.target.value);
  };
  const getKcal = (event) => {
    setkcal(event.target.value);
  };

  const getNutrien = () => {
    let url = `http://openapi.foodsafetykorea.go.kr/api/ca47080538bd4c6dbd83/I2790/JSON/시작행인덱스(숫자)/끝행인덱스(숫자)/DESC_KOR=값&NUTR_CONT1=값2
    `;

    axios.get(url).then((res) => {});
  };
};

export default Nutrient;
