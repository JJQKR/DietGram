class Post {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getPosts() {
    const { data } = await this.#client.from("posts").select();
    return data;
  }

  async insertPost(formData) {
    const { data } = await this.#client
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
  }

  async deletePost(id) {
    const { data } = await this.#client
      .from("posts")
      .delete()
      .eq("id", id)
      .select();
    const [deletedPost] = data;

    return deletedPost;
  }

  async updatePost(id, formData) {
    const { data } = await this.#client
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
  }

  async isLike(id) {
    // 유저에 like id를 넣어줘야해
    const { data } = await this.#client.from("users").select("like");
    const likeIdx = data[0].like.findIndex((item) => item === id);
    likeIdx !== -1 ? data[0].like.splice(likeIdx, 1) : data[0].like.push(id);
    const updatedData = await this.#client
      .from("users")
      .update({ like: data[0].like })
      .eq("user_id", "3f79941c-4b6c-4137-87c9-f2d6a40d6be7")
      .select();
    return updatedData.data[0];
  }
}

export default Post;
