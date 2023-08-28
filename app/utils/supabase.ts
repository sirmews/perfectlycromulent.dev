import type { Database } from '@/app/types/supabase';
import { createClient } from '@supabase/supabase-js';


export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: { persistSession: false },
  }
)

/**
 * Get all haikus from the database in descending order of date
 */
export const getHaikus = async () => {
  try {
    return supabase.from("haikus").select().order('date', { ascending: false });
  } catch (error) {
    throw new Error("Error getting haikus");
  }
}

/**
 * Get a single haiku from the database
 */
export const getHaiku = async (slug: string) => {
  try {
    return supabase.from("haikus").select().eq('slug', slug).limit(1).single();
  } catch (error) {
    throw new Error(`Error getting haiku: ${slug}`);
  }
}