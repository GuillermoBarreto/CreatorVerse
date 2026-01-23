async function fetchCreators() {
  const { data, error } = await supabase.from('creators').select('*')
  if (error) {
    console.log('Supabase error:', error)
    setCreators([])  // <-- important: prevent null crash
  } else {
    setCreators(data)
  }
}
