import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  "https://mtddrulacypyulwcwtsh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZGRydWxhY3lweXVsd2N3dHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTAzMDMsImV4cCI6MjAzMjg4NjMwM30.HKqvWjgecPZcdv1xI5MQDY4F-4aKDOQIlPv0VG4wCBY"
);

function SupabaseTest() {
  const [posts, setPosts] = useState([]);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const { data } = await supabase.from("dietgram").select();
    setPosts(data);
  }

  // insertlogic - insert({column : data})
  // async function insertPost() {
  //      const { data } = await supabase
  //   .from('posts')
  //   .insert({
  //     menu: prompt('메뉴를 입력해주세요.'),
  //     content: prompt('내용을 입력해주세요.'),
  //   })
  //   .select('*');

  // setPosts((prev) => [...prev, ...data]);
  // }

  async function signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  // 로그인 시에 토큰, id이 존재함
  // -> 토큰이 존재한다면 마이 페이지가 가져야되고 해당 id를 사용해서 포스트를 관리해야한다.

  async function checkSignIn() {
    const session = await supabase.auth.getSession();
    const isSignIn = !!session.data.session;
    console.log(session);
    setSignIn(isSignIn);
  }

  async function signOut() {
    await supabase.auth.signOut();
    checkSignIn();
  }

  useEffect(() => {
    getPosts();
    checkSignIn();
  }, []);

  return (
    <main>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      {signIn ? (
        <SignInBtn text="로그아웃" onClick={signOut} />
      ) : (
        <SignInBtn text="로그인" onClick={signInWithGithub} />
      )}
    </main>
  );
}

function SignInBtn({ text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default SupabaseTest;
