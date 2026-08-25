import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY' // Found in your Project Settings

export const supabase = createClient(supabaseUrl, supabaseAnonKey)