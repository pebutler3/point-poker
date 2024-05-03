import { useStorage } from "@vueuse/core";

export const useSession = defineStore('session', () => {
  const stories = ref([]);
  const activeSession = ref({});
  const pointOptions = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100];
  const sessionUsername = ref(null);
  const sessionObserver = ref(false);
  const temporarySession = ref(null);
  const whoami = ref(null)

  const setActiveSession = (session) => activeSession.value = session;
  const setSessionStories = (sessionStories) => stories.value = sessionStories;
  const setWhoami = (user) => {
    whoami.value = user;
  }

  const setPokerPoints = (id, session_id, username) => {
    // const { id, session_id, username, } = [ ...props ];

    console.log('SET_POKER_POINTS', {
      id,
      session_id,
      username
    })

    const storedPokerPoints = useStorage('pokerPoints');

    if (storedPokerPoints.value === "{}" || !storedPokerPoints.value) {
      useStorage('pokerPoints', {
        id,
        session_id,
        username
      })

      whoami.value = id
    } else {
      setWhoami(JSON.parse(storedPokerPoints.value).id)
    }
  }

  const setTemporarySession = (session) => temporarySession.value = session;

  return {
    activeSession,
    pointOptions,
    sessionUsername,
    sessionObserver,
    setActiveSession,
    setPokerPoints,
    setSessionStories,
    setWhoami,
    stories,
    temporarySession,
    setTemporarySession,
    whoami
  }
})
