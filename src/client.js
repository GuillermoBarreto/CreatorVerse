import { createClient } from '@supabase/supabase-js'

const URL = 'https://qmhnjadnxynbmrzzzcro.supabase.co'
const API_KEY = process.env.SUPABASE_KEY

export const supabase = createClient(URL, API_KEY)
