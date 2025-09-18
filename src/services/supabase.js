import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mjaupnmeasaqonarimzz.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYXVwbm1lYXNhcW9uYXJpbXp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2ODI0OTksImV4cCI6MjA2OTI1ODQ5OX0.91W055IyipgeoINzn4mqlShhzzzYHSltKsSsPK1PK2g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
