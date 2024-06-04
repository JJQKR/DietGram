import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { checkLogin } from "../redux/slices/currentUser.slice";
import { supabase } from "../supabase/supabase";

function DefaultLayout() {
  // 로그인 검사
  const isSignIn = async () => await supabase.login.checkSignIn();
  const dispatch = useDispatch();
  const action = checkLogin(isSignIn());
  const selector = useSelector((state) => state.currentUser);
  console.log("selector", selector);
  dispatch(action);

  return (
    <div id="default-layout">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
