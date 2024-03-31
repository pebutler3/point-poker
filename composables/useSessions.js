export const useSessions = (sessions) => {
  return useState('sessions', () => sessions);
};

export const useSession = (session) => {
  return useState('session', () => session[0]);
}

export const useClearSession = () => useState('session', () => null);

