class Comment {
  #client;

  constructor(client) {
    this.#client = client;
  }

  async getComments() {
    const { data } = await this.#client.from('comments').select();
    return data;
  }

  async insertComment(postId, comment, avatar_url, nickName) {
    const { data } = await this.#client
      .from('comments')
      .insert({
        post_id: postId,
        comment: comment,
        avatar_url: avatar_url,
        nickName: nickName
      })
      .select('*');
    return data;
  }

  async deleteComment(id) {
    const { data } = await this.#client.from('comments').delete().eq('id', id).select();
    const [deletedPost] = data;

    return deletedPost;
  }

  async updateComment(id, comment) {
    const { data } = await this.#client
      .from('comments')
      .update({
        comment: comment
      })
      .eq('id', id)
      .select();
    const [updatedPost] = data;

    return updatedPost;
  }
}

export default Comment;
