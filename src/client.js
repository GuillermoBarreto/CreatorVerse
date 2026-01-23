import { createClient } from '@supabase/supabase-js'

// Supabase project info
const supabaseUrl = 'https://qmhnjadnxynbmrzzzcro.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
