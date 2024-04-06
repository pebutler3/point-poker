export const useSessions = defineStore('sessions', () => {
  const allSessions = ref([]);

  const setSessions = (sessions) => allSessions.value = sessions;

  return { allSessions, setSessions }
});