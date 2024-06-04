import { createClient } from "@supabase/supabase-js";

const SUPABASE_PROJECT_URL = "https://sngxevhlxxzjbwdbherl.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNuZ3hldmhseHh6amJ3ZGJoZXJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTc3NjIsImV4cCI6MjAzMjk5Mzc2Mn0.kyYFAIC4OPlFPHDL0j8wjcbTYixhU42jRgmfVOht5hs";

const supabaseLogin = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

export default supabaseLogin;
