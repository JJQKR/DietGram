import getPosts from "../../supabase/supabase";

const initialState = {
  dataList: getPosts(),
};

console.log("initialState", initialState);
