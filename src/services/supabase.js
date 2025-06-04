import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://iwmekoszhcndvufzgcgh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3bWVrb3N6aGNuZHZ1ZnpnY2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NjIwMjcsImV4cCI6MjA2MzIzODAyN30.4tEOrQ4rvP_liuCkNk6QAGHCXDgoPve9uxs8UUiFJO8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
