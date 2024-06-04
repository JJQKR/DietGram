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

  async isLike() {
    const { data } = await this.#client.from("users").select("like");
    console.log("data", data);
  }
}

export default Post;
