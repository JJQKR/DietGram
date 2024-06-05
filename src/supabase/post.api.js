class Post {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getPosts() {
    const { data } = await this.#client.from('posts').select();
    return data;
  }

  async getUsers() {
    const { data } = await this.#client.from('users').select();
    return data;
  }

  async insertServerPost(formData) {
    const { data } = await this.#client
      .from('posts')
      .insert({
        menu: formData.menu,
        content: formData.content,
        kcal: formData.kcal,
        raiting: formData.rating,
        price: formData.price,
        place: formData.place
      })
      .select('*');

    return data;
  }

  //NOTE  삭제가능한 거 찾아서 넣어줘야 그 것을 삭제하고 리턴해서 데이터를 deletePost에 넣어서 삭제해야함 ㅇㅇ
  async deleteServerPost(id) {
    const { data } = await this.#client.from('posts').delete().eq('id', id).select();
    const [deletedPost] = data;

    return deletedPost;
  }

  async updateServerPost(id, formData) {
    const { data } = await this.#client
      .from('posts')
      .update({
        menu: formData.menu,
        content: formData.content,
        kcal: formData.kcal,
        raiting: formData.rating,
        price: formData.price,
        place: formData.place
      })
      .eq('id', id)
      .select();
    const [updatedPost] = data;

    return updatedPost;
  }

  async isLike(id, userId) {
    // 유저에 like id를 넣어줘야해
    const { data } = await this.#client.from('users').select('*');
    const loginUser = data.filter((item) => item.user_id === userId);
    const likeIdx = loginUser[0]?.like.findIndex((item) => item === id);
    likeIdx !== -1 ? loginUser[0]?.like.splice(likeIdx, 1) : loginUser[0].like.push(id);
    const updatedData = await this.#client
      .from('users')
      .update({ like: loginUser[0]?.like })
      .eq('user_id', userId)
      .select();
    return updatedData.data[0];
  }
}

export default Post;
