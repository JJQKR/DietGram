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
}

export default Login;
