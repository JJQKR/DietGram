// import './App.css'

//import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Postlist from "./pages/Postlist/Postlist";

function App() {
  return (
    <>
      <NavBar />
      <Postlist />
    </>
  );
}
// <BrowserRouter>
//   <Header />
// router ver.6 헤더 기능 검색
//   <Routes>
//     <Route></Route>
//   </Routes>
// </BrowserRouter>
export default App;
