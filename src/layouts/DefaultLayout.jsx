import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { checkLogin } from "../redux/slices/user.slice";
import { supabase } from "../supabase/supabase";

function DefaultLayout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSignInStatus = async () => {
      const isSignIn = await supabase.login.checkSignIn();
      console.log("isSignIn", isSignIn);
      const action = checkLogin(isSignIn);
      dispatch(action);
    };

    checkSignInStatus();
  }, []);

  return (
    <div id="default-layout">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
