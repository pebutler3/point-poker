import { useSession } from '../stores/session';

export const useGetSessionUsers = async (supabase) => {
  const store = useSession();

  let { data: users, error } = await supabase
    .from('users')
    .select()
    .eq('session_id', store.activeSession.id)

  store.activeSession.users = users;
  store.activeSession.users.forEach((user) => user.points = null)

  // if (!error) {
  //   store.setPokerPoints();
  // }
}
