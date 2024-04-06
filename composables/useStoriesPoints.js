export const useStoriesPoints = async(supabase, storyId) => {
  let { data, error } = await supabase
    .from('story_points')
    .select()
    .eq('story_id', storyId)

  return data;
}
