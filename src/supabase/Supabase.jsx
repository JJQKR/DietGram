import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mtddrulacypyulwcwtsh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZGRydWxhY3lweXVsd2N3dHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTAzMDMsImV4cCI6MjAzMjg4NjMwM30.HKqvWjgecPZcdv1xI5MQDY4F-4aKDOQIlPv0VG4wCBY"
);

// function Supabase() {
//   const [posts, setPosts] = useState([]);
//   const [signIn, setSignIn] = useState(false);
//   const [profileUrl, setProfileUrl] = useState("");
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     getPosts();
//     checkSignIn();
//     checkProfile();
//     // insertPost();
//   }, []);

//   // async function getPosts() {
//   //   const { data } = await supabase.from("dietgram").select();
//   //   return data;
//   // }

//   // insertlogic - insert({column : data})
//   // async function insertPost() {
//   //   const { data } = await supabase
//   //     .from("dietgram")
//   //     .insert({
//   //       menu: prompt("메뉴를 입력해주세요."),
//   //       content: prompt("내용을 입력해주세요."),
//   //     })
//   //     .select("*");
//   //   setPosts((prev) => [...prev, ...data]);
//   // }

//   // 해당 포스트의 id를 넣어줘야함.
//   // async function deletePost(id) {
//   //   const { data } = await supabase
//   //     .from("dietgram")
//   //     .delete()
//   //     .eq("id", id)
//   //     .select();

//   //   const [deletedPost] = data;
//   //   const filteredList = posts.filter((post) => post.id !== deletedPost.id);

//   //   setPosts(filteredList);
//   // }

//   // post의 id값을 넣어줘야함
//   async function updatePost(id) {
//     const { data } = await supabase
//       .from("dietgram")
//       .update({
//         menu: prompt("수정할 제목을 입력해주세요."),
//         content: prompt("수정할 내용을 입력해주세요."),
//       })
//       .eq("id", id)
//       .select();

//     const [updatedPost] = data;
//     const updatedList = posts.map((post) =>
//       post.id === updatedPost.id ? updatedPost : post
//     );

//     setPosts(updatedList);
//   }

//   async function signInWithGithub() {
//     await supabase.auth.signInWithOAuth({
//       provider: "github",
//     });
//   }

//   // 로그인 시에 토큰, id이 존재함
//   // -> 토큰이 존재한다면 마이 페이지가 가져야되고 해당 id를 사용해서 포스트를 관리해야한다.

//   async function checkSignIn() {
//     const session = await supabase.auth.getSession();
//     const isSignIn = !!session.data.session;
//     setSignIn(isSignIn);
//   }

//   async function signOut() {
//     await supabase.auth.signOut();
//     checkSignIn();
//   }

//   function checkProfile() {
//     const { data } = supabase.storage
//       .from("avatars")
//       .getPublicUrl("default-profile.jpg");
//     setProfileUrl(data.publicUrl);
//   }
//   async function handleFileInputChange(files) {
//     const [file] = files;

//     if (!file) {
//       return;
//     }

//     const { data } = await supabase.storage
//       .from("avatars")
//       .upload(`avatar_${Date.now()}.png`, file);

//     setProfileUrl(
//       `https://rsiksyqynpeghzcecoys.supabase.co/storage/v1/object/public/avatars/${data.path}`
//     );
//   }
// }
async function getPosts() {
  const { data } = await supabase.from("dietgram").select();
  return data;
}

export default getPosts;
