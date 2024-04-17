import { useSession } from '../stores/session';

export const useJoinSession = async () => {
  const router = useRouter();
  const store = useSession();
  const { id, session_id } = await useCreateUser();

  store.setPokerPoints(id, session_id);

  await useCreateSession();

  router.push(`/sessions/${session_id}`);
}