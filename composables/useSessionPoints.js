export const useSessionPoints = async(sessionId) => {
  const supabase = useSupabaseClient();
  let { data, error } = await supabase
    .from('story_points')
    .select('*')
    .eq('session_id', sessionId)

  return data;
}
