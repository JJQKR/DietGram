// import './App.css'

//import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Postlist from "./pages/Postlist/Postlist";

function App() {
  return (
    <>
      <Header />
      <Postlist />
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// <BrowserRouter>
//   <Routes>
//     <Route></Route>
//   </Routes>
// </BrowserRouter>
export default App;
