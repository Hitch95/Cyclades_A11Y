import "jsr:@std/dotenv/load";
import { createClient } from "jsr:@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("DATABASE_URL");
const supabaseKey = Deno.env.get("DATABASE_API_KEY");

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseKey);

// This function now just returns the initialized client
export const initializeCandidateDatabase = () => supabase;
