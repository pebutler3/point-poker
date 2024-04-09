import { useSession } from '../stores/session';

export const useGetStoryUsers = async (supabase, sessionId) => {
  const store = useSession();

  let { data: users, error } = await supabase
    .from('users')
    .select()
    .eq('session_id', sessionId)

  store.activeSession.users = users;
  store.activeSession.users.forEach((user) => user.points = null)

  if (!error) {
    store.setPokerPoints();
  }
}
