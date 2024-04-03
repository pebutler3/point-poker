export const useSession = defineStore('session', () => {
  const stories = ref([]);
  const activeSession = ref({});

  const setActiveSession = (session) => activeSession.value = session;
  const setSessionStories = (stories) => stories.value = stories;

  const pointOptions = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];

  return { activeSession, pointOptions, setActiveSession, setSessionStories }
})
