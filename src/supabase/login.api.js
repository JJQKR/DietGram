class Login {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async signUp(email, password, nickName) {
    const { data, error } = await this.#client.auth.signUp({
      email,
      password,
      options: {
        data: {
          nickName,
          avatarUrl:
            "https://sngxevhlxxzjbwdbherl.supabase.co/storage/v1/object/public/avatars/dafalut_image2-removebg-preview.png",
        },
      },
    });
    return { data, error };
  }

  async signInWithPassword(email, password) {
    const { data, error } = await this.#client.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  }

  async signInWithGithub() {
    await this.#client.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async checkSignIn() {
    const session = await this.#client.auth.getSession();
    const isSignIn = !!session.data.session;
    return isSignIn;
  }

  async signOut() {
    await this.checkSignIn();
    await this.#client.auth.signOut();
  }

  async insertUser(id) {
    const { data, error } = await this.#client
      .from("users")
      .insert({
        user_id: id,
        like: [],
      })
      .select("*");
    if (error) {
      console.error("error => ", error);
    } else {
      console.log("insertUser => ", data);
      return data;
    }
  }
}

export default Login;
