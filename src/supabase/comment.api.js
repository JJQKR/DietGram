class Comment {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getComments() {
    const { data } = await this.#client.from("comments").select();
    return data;
  }

  async insertComment(postId) {
    const { data } = await this.#client
      .from("comments")
      .insert({
        comment: prompt("제목을 입력해주세요."),
        post_id: postId,
      })
      .select("*");

    return data;
  }

  async deleteComment(id) {
    const { data } = await this.#client
      .from("comments")
      .delete()
      .eq("id", id)
      .select();
    const [deletedPost] = data;

    return deletedPost;
  }

  async updateComment(id) {
    const { data } = await this.#client
      .from("comments")
      .update({
        comment: "야미야미야미",
      })
      .eq("id", id)
      .select();
    console.log("data", data);
    const [updatedPost] = data;

    return updatedPost;
  }
}

export default Comment;
