import { createClient } from '@supabase/supabase-js';
import Comment from './comment.api';
import Login from './login.api';
import Post from './post.api';

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_API_KEY;

class Supabase {
  #client;

  post;
  comment;
  login;

  constructor() {
    this.#client = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
    this.post = new Post(this.#client);
    this.comment = new Comment(this.#client);
    this.login = new Login(this.#client);
  }
}

export const supabase = new Supabase();
