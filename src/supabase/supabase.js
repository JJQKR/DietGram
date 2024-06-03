import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mtddrulacypyulwcwtsh.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZGRydWxhY3lweXVsd2N3dHNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTAzMDMsImV4cCI6MjAzMjg4NjMwM30.HKqvWjgecPZcdv1xI5MQDY4F-4aKDOQIlPv0VG4wCBY"
);

const SupabaseFunc = {
  async getPosts() {
    const { data } = await supabase.from("posts").select();
    return data;
  },

  async insertPost(formData) {
    const { data } = await supabase
      .from("posts")
      .insert({
        menu: formData.menu,
        content: formData.content,
        kcal: formData.kcal,
        raiting: formData.rating,
        price: formData.price,
        place: formData.place,
      })
      .select("*");

    return data;
  },

  async deletePost(id) {
    const { data } = await supabase
      .from("posts")
      .delete()
      .eq("id", id)
      .select();
    const [deletedPost] = data;

    return deletedPost;
  },

  async updatePost(id, formData) {
    const { data } = await supabase
      .from("posts")
      .update({
        menu: formData.menu,
        content: formData.content,
        kcal: formData.kcal,
        raiting: formData.rating,
        price: formData.price,
        place: formData.place,
      })
      .eq("id", id)
      .select();
    console.log("data", id);
    const [updatedPost] = data;

    return updatedPost;
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

  // checkProfile() {
  //   const { data } = supabase.storage
  //     .from("posts-images")
  //     .getPublicUrl("default-profile.jpg");

  //   return data.publicUrl;
  // },

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

export default SupabaseFunc;
