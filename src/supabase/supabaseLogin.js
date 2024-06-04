import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = import.meta.env.VITE_SUPABASE_URL_JHU;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_KEY_JHU;

const supabaseLogin = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabaseLogin;
