import { useSession } from '../stores/session';

export const useJoinSession = async () => {
  const router = useRouter();
  const store = useSession();
  const { id, session_id } = await useCreateUser();

  store.setPokerPoints(id, session_id);

  if (store.activeSession?.users?.length < 1) {
    await useCreateSession();
    router.push(`/sessions/${session_id}`);
  }
}
