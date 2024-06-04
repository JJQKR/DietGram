class Comment {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getComments() {
    const { data } = await this.#client.from("comments").select();
    return data;
  }

  async insertComment() {
    const { data } = await this.#client
      .from("comments")
      .insert({
        comment: prompt("제목을 입력해주세요."),
      })
      .select("*");

    return data;
  }
}

export default Comment;
