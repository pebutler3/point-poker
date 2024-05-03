import { v4 as uuidv4 } from 'uuid';
import generateRandomTitle from '~/utils/generateRandomTitle';
import { useSession } from '../stores/session';

export const useCreateTemporarySession = () => {
  const store = useSession();

  store.setTemporarySession({
    id: uuidv4(),
    session_name: generateRandomTitle(),
  })
}