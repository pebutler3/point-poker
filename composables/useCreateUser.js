import { useSession } from '../stores/session';

export const useCreateUser = async () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const store = useSession();

  const { data, error } = await supabase
    .from('users')
    .insert({
        username: store.sessionUsername,
        session_id: store.temporarySession.id,
        observer: store.sessionObserver,
      })
    .select();

    return data[0];
}