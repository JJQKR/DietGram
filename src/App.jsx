import "./App.css";
import Supabase from "./supabase/supabase";

async function App() {
  const supabase = Supabase;
  const getPost = await supabase.getPosts();

  console.log("getPost", getPost);

  return <div></div>;
}

export default App;
