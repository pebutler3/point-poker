export const useSessionsx = (sessions) => {
  return useState('sessions', () => sessions);
};

export const useSessionx = (session) => {
  return useState('session', () => session[0]);
}

// export const useSessionStories = (stories) => {
//   return useState('sessionStories', () => stories);
// }

export const useClearSession = () => useState('session', () => null);

