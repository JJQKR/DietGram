import getPosts from "../../supabase/Supabase";

const initialState = {
  dataList: getPosts(),
};

console.log("initialState", initialState);
