export const useGetStoryById = async (supabase, storyId) => {
  let { data: stories, error } = await supabase
    .from('stories')
    .select()
    .eq('id', storyId)

  return stories;
}
