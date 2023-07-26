import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://scqmytmyvyezlvqroqnk.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcW15dG15dnllemx2cXJvcW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAyNjI4OTUsImV4cCI6MjAwNTgzODg5NX0.Qx_Dw6jTuaaa4bKxvRBrstrub0IYZa5xVfADbUZSrmQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
