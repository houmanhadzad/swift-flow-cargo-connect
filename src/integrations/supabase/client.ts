// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tqnwfhdsszvvpqnfafdn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbndmaGRzc3p2dnBxbmZhZmRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNTA3MjAsImV4cCI6MjA2NzYyNjcyMH0.QvGEShC_UFVA6Pgdr8O7cQpn8uAh21KuRJDAC2DF7AQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});