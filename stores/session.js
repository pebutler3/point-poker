import { useStorage } from "@vueuse/core";

export const useSession = defineStore('session', () => {
  const stories = ref([]);
  const activeSession = ref({});
  const pointOptions = ["0", "0.5", "1", "2", "3", "5", "8", "13", "20", "40", "100", "🤷‍♂️"];
  const sessionUsername = ref(null);
  const sessionObserver = ref(false);
  const temporarySession = ref(null);
  const whoami = ref({});
  const pokerPoints = useStorage('pokerPoints', {});

  if (pokerPoints.value && pokerPoints.value.username) {
    whoami.value.username = pokerPoints.value.username;
    whoami.value.id = pokerPoints.value.id
  }

  const setActiveSession = (session) => activeSession.value = session;
  const setSessionStories = (sessionStories) => stories.value = sessionStories;
  const setWhoami = (user) => whoami.value = user;
  const setPokerPoints = (id, session_id) => {
    console.log(id, session_id, activeSession.id)
    pokerPoints.value.id = id
    pokerPoints.value.session_id = session_id
    pokerPoints.value.username = sessionUsername
  }

  const isUserInSession = computed(() => {
    const userIds = activeSession?.value?.users?.map((user) => user.id);
    return userIds?.includes(whoami.value.id)
  })

  const setTemporarySession = (session) => temporarySession.value = session;

  return {
    activeSession,
    isUserInSession,
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
