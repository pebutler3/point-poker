import { useSession } from '../stores/session';

export const useJoinSession = async () => {
  const router = useRouter();
  const store = useSession();
  const { id, session_id, username } = await useCreateUser();

  store.setPokerPoints(id, session_id, username);
  await useCreateSession();
  router.push(`/sessions/${session_id}`);
}