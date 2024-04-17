import { useSession } from '../stores/session';

export const useCreateUser = async () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const store = useSession();
  const sessionId = router.currentRoute.value.params.id[0];

  const { data, error } = await supabase
    .from('users')
    .insert({
        username: store.sessionUsername,
        session_id: sessionId || store.temporarySession.id,
        observer: store.sessionObserver,
      })
    .select();

    return data[0];
}