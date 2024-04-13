import { useSession } from '../stores/session';

const supabase = useSupabaseClient();
const store = useSession();
const router = useRouter();

export const useCreateUser = async () => {
  const { id, session_id, username } = await createUser();
  store.setPokerPoints(id, session_id, username);
  await createSession();
  router.push(`/sessions/${session_id}`);
}