import { useSession } from '../stores/session';

export const useCreateSession = async () => {
  const supabase = useSupabaseClient();
  const store = useSession();

  await supabase
    .from('sessions')
    .insert({
      id: store.temporarySession.id,
      session_name: store.temporarySession.session_name
    })
}