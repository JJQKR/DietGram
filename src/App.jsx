import Home from './pages/Home';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { changeValue } from './redux/slices/form.slice';
// import { initDataList } from './redux/slices/supabase.slice';
// import SupabaseFunc from './supabase/supabase';

// function App() {

//   const onclickHandler = async (e) => {
//     e.preventDefault();
//     // supabase.signUp();

//     // const formData = {
//     //   menu: "짜장면",
//     //   content: "간짜장",
//     //   kcal: 200,
//     //   raiting: 3.5,
//     //   price: 12000,
//     //   place: "신창동 짜장집",
//     // };
//     // const data = await supabase.insertPost(formData);
//     // const action = insertPost(data);
//     // dispatch(action);

//     //deletePost 예시
//     // const data = await supabase.deletePost(24);
//     // const action = deletePost(data);
//     // dispatch(action);

//     //updatePost 예시
//     // const data = await supabase.updatePost(25);
//     // const action = updatePost(data);
//     // dispatch(action);
//     // console.log("data", data);
//   };

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

//     <div>
//       {posts.map((item) => {
//         return (
//           <>
//             <h1>{item.menu}</h1>
//             <p>{item.content}</p>
//             <p>{item.id}</p>
//           </>
//         );
//       })}
//       <button onClick={supabase.signInWithGithub}>로그인</button>
//       <button onClick={onclickHandler}>삭제</button>
//       <input
//         onChange={(e) => {
//           const action = changeValue({
//             content: e.target.value,
//             type: "menu",
//           });
//           dispatch(action);
//           console.log("formData", formData);
//         }}
//       />
//     </div>
//   );
// }

export default App;
