class Login {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async signInWithGithub() {
    await this.#client.auth.signInWithOAuth({
      provider: "github",
    });
  }

  async checkSignIn() {
    const session = await this.#client.auth.getSession();
    const isSignIn = !!session.data.session;
    console.log("isSignIn", isSignIn);
    console.log("session", session);
    return isSignIn;
  }

  async signOut() {
    await this.checkSignIn();
    await this.#client.auth.signOut();
  }

  // 유저 정보 가져오는 코드
  async getSession() {
    const session = await this.#client.auth.getSession();
    return session;
  }
}

export default Login;
