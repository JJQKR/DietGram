import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mtddrulacypyulwcwtsh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZGRydWxhY3lweXVsd2N3dHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTAzMDMsImV4cCI6MjAzMjg4NjMwM30.HKqvWjgecPZcdv1xI5MQDY4F-4aKDOQIlPv0VG4wCBY"
);

const Supabase = {
  async getPosts() {
    const { data } = await supabase.from("posts").select();
    return data;
  },

  async insertPost() {
    const { data } = await supabase
      .from("posts")
      .insert({
        menu: prompt("메뉴를 입력해주세요."),
        content: prompt("내용을 입력해주세요."),
        kcal: prompt("asdasd"), //변수명
      })
      .select("*");

    return data;
  },

  async deletePost(id, posts) {
    const { data } = await supabase
      .from("posts")
      .delete()
      .eq("id", id)
      .select();

    const [deletedPost] = data;
    const filteredList = posts.filter((post) => post.id !== deletedPost.id);

    return filteredList;
  },

  async updatePost(id, posts) {
    const { data } = await supabase
      .from("posts")
      .update({
        menu: prompt("수정할 제목을 입력해주세요."),
        content: prompt("수정할 내용을 입력해주세요."),
      })
      .eq("id", id)
      .select();

    const [updatedPost] = data;
    const updatedList = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );

    return updatedList;
  },

  async signInWithGithub() {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  },

  async checkSignIn() {
    const session = await supabase.auth.getSession();
    const isSignIn = !!session.data.session;

    return isSignIn;
  },

  async signOut() {
    await supabase.auth.signOut();
    this.checkSignIn();
  },

  checkProfile() {
    const { data } = supabase.storage
      .from("posts-images")
      .getPublicUrl("default-profile.jpg");

    return data.publicUrl;
  },

  async handleFileInputChange(files) {
    const [file] = files;

    if (!file) {
      return;
    }

    const { data } = await supabase.storage
      .from("posts")
      .upload(`posts_${Date.now()}.png`, file);

    return `https://rsiksyqynpeghzcecoys.supabase.co/storage/v1/object/public/avatars/${data.path}`;
  },
};

export default Supabase;
