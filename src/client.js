import { createClient } from '@supabase/supabase-js'

const URL = 'YOUR_SUPABASE_PROJECT_URL'
const API_KEY = 'YOUR_SUPABASE_API_KEY'

export const supabase = createClient(URL, API_KEY)
