import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tcfxcunxtwtzyvrualbh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjZnhjdW54dHd0enl2cnVhbGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzNjc4ODYsImV4cCI6MjA5Nzk0Mzg4Nn0.5rRdpqI08QZlN-aMLQccGVPYCQVAxfMd4GmhVyafOIE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);