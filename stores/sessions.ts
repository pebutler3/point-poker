import type { Session } from "~/interfaces/session";

interface State {
  allSessions: Ref<Session[]>
}

export const useSessions = defineStore('sessions', {
  state: (): State => {
    return {
      allSessions: ref([]),
    }
  },
  getters: {
    allSession(): Session[] {
      return this.allSessions;
    }
  },
  actions: {
    setSessions(sessions: Session[]) {
      this.allSessions = sessions;
    }
  }
});