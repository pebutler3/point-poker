import type { State, PokerPoints, Session, Whoami } from "~/interfaces/session";
import { useStorage } from "@vueuse/core";

export const useSession = defineStore('session', {
  state: (): State => {
    return {
      activeSession: { admin: null, created_at: '', id: '', session_name: '', users: [] },
      pointOptions: ["0", "0.5", "1", "2", "3", "5", "8", "13", "20", "40", "100", "🤷‍♂️"],
      sessionUsername: null,
      sessionObserver: false,
      temporarySession: { id: '', session_name: '' },
      whoami: ref<Whoami>({ id: '', username: ''}),
      pokerPoints: useStorage<PokerPoints>('pokerPoints', { id: '', username: '', session_id: '' }),
    }
  },
  getters: {
    getPokerPoints() {
      if (this.pokerPoints && this.pokerPoints.username) {
        this.whoami.username = this.pokerPoints.username;
        this.whoami.id = this.pokerPoints.id
      }
    },
    isUserInSession(): boolean {
      const userIds = this.activeSession?.users?.map((user) => user.id);
      return userIds?.includes(this.whoami.id)
    },
  },
  actions: {
    setActiveSession(session: Session) {
      this.activeSession = session;
    },
    setPokerPoints(id: string, session_id: string) {
      this.pokerPoints.id = id
      this.pokerPoints.session_id = session_id
      this.pokerPoints.username = this.sessionUsername || ''
    },
    setTemporarySession(session: Session) {
      this.temporarySession = session 
    },
    setWhoami(user: Whoami) {
      this.whoami = user;
    }
  }
})
