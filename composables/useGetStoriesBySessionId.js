import { useSession } from '../stores/session';
const store = useSession();

export const useGetStoriesBySessionId = async (supabase, sessionId) => {
  const { data } = await supabase.from(
    'stories')
    .select()
    .eq('session_id', sessionId)

    store.setSessionStories(data);
}
