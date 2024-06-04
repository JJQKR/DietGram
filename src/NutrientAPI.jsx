// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [inputMenu, setInputMenu] = useState('');
//   const [resultMenu, setResultMenu] = useState('');

//   // 사용자가 입력한 메뉴를 가져오는 함수
//   const getResultMenu = (event) => {
//     setResultMenu(inputMenu);
//   };

//   // => setResultMenu(inputMenu)

//   //그리고 이 입력메뉴를 url에 담아
//   //거기서 칼로리를 가져와

//   useEffect(() => {
//     const getData = async () => {
//       console.log('함수실행됨');
//       let url = `http://openapi.foodsafetykorea.go.kr/api/ca47080538bd4c6dbd83/I2790/JSON/1/10/DESC_KOR=가자미구이`;
//       const response = await axios.get(url);
//       console.log(response);
//       return response;
//     };
//     console.log('첫 렌더링');
//     getData();
//   }, []);

//   return (
//     <>
//       <div>데이터 가져오기</div>
//       <p>메뉴</p>
//       <input type="text" value={inputMenu} onChange={(event) => setInputMenu(event.target.value)}></input>
//     </>
//   );
// }

// export default App;
