import { useStorage } from "@vueuse/core";

export const useSession = defineStore('session', () => {
  const stories = ref([]);
  const activeSession = ref({});
  const whoami = ref(null)
  const pointOptions = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

  const setActiveSession = (session) => activeSession.value = session;
  const setSessionStories = (sessionStories) => stories.value = sessionStories;
  const setWhoami = (user) => {
    whoami.value = user;
  }

  const setPokerPoints = (...props) => {
    console.log('setPokerPoints', props)
    const storedPokerPoints = useStorage('pokerPoints');

    if (storedPokerPoints && storedPokerPoints.value) {
      const pokerPoints = storedPokerPoints.value;
      setWhoami(JSON.parse(pokerPoints).id)
    } else {
      useStorage('pokerPoints', {
        session_id: props.session_id,
        id: props.id,
        username: props.username
      })
      whoami.value = props.id
    }
  }

  return {
    activeSession,
    pointOptions,
    setActiveSession,
    setPokerPoints,
    setSessionStories,
    setWhoami,
    stories,
    whoami
  }
})
