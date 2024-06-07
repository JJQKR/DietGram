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
            'https://mtddrulacypyulwcwtsh.supabase.co/storage/v1/object/public/dietgram-images/profile-images/dafalut_image2-removebg-preview.png'
        }
      }
    });
    return { data, error };
  }

  async signInWithPassword(email, password) {
    const { data, error } = await this.#client.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  }

  async signInWithGithub() {
    await this.#client.auth.signInWithOAuth({
      provider: 'github'
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

  async insertUser(id, nickName) {
    const { data, error } = await this.#client
      .from('users')
      .insert({
        user_id: id,
        nickName,
        like: []
      })
      .select('*');
    if (error) {
      console.error('error => ', error);
    } else {
      console.log('insertUser => ', data);
      return data;
    }
  }

  changeUserInfo = async (id, sliceNickname, avatarUrl) => {
    const { data, error } = await this.#client.auth.updateUser({
      data: {
        nickName: sliceNickname,
        avatarUrl
      }
    });
    await this.#client
      .from('users')
      .update({
        nickName: sliceNickname
      })
      .eq('user_id', id)
      .select('*');
  };

  async uploadServerProfileImage(file) {
    const { data, error } = await this.#client.storage
      .from('dietgram-images')
      .upload(`profile-images/${crypto.randomUUID()}.png`, file);

    if (error) {
      console.error(error);
      return;
    }

    const { data: imageData } = await this.#client.storage.from('dietgram-images').getPublicUrl(data.path);

    return imageData.publicUrl;
  }
}

export default Login;
