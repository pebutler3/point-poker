interface State {
  activeSession: Session
  pointOptions: string[]
  pokerPoints: Ref<PokerPoints>
  sessionUsername: string | null
  sessionObserver: boolean
  temporarySession: Session | {}
  whoami: Ref<Whoami>
}

interface PokerPoints {
    id: string
    username: string
    session_id: string
}

interface Session {
  admin: null,
  created_at: string
  id: string
  session_name: string
  users: User[]
}

interface User {
  created_at: string
  id: string
  observer: boolean
  points: number | null
  session_id: string
  username: string
}

interface Whoami {
  id: string
  username: string
}

export type {
  State,
  PokerPoints,
  Session,
  User,
  Whoami
}