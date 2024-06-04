import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import "./App.css";
import { changeValue } from "./redux/slices/form.slice";
import {
  deletePost,
  initDataList,
  insertPost,
} from "./redux/slices/supabase.slice";
import SupabaseFunc from "./supabase/supabase";
import NavBar from "./components/NavBar/NavBar";
import Postlist from "./pages/Postlist/Postlist";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/TestPages/Home";
import Mypage from "./pages/TestPages/Mypage";
import Signup from "./pages/TestPages/Signup";
import Login from "./pages/TestPages/Login";

function App() {
  return (
    <>
      <NavBar />
      <Postlist />
    </>
  );
}

export default App;
