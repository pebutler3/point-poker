export const useSessionStories = defineStore('sessions', () => {
  const sessionStories = ref([])
  const setSessionStores = (sessions) => sessionStories.value = sessions;

  return { sessionStories, setSessionStores }
})
