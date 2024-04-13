<script setup>
const router = useRouter();
const supabase = useSupabaseClient();
const store = useSession();
const sessionUsername = ref(null);
const sessionObserver = ref(false);

const createUser = async () => {
  const { data, error } = await supabase
    .from('users')
    .insert({
        username: sessionUsername.value,
        session_id: store.temporarySession.id,
        observer: sessionObserver.value,
      })
    .select();

    return data[0];
}

const createSession = async () => {
  const { data, error } = await supabase
    .from('sessions')
    .insert({
      id: store.temporarySession.id,
      session_name: store.temporarySession.session_name
    })
}

const joinSession = async () => {
  const { id, session_id, username } = await createUser();

  store.setPokerPoints(id, session_id, username);

  await createSession();

  router.push(`/sessions/${session_id}`);
}
</script>

<template>
  <h1>{{ store.temporarySession.session_name ?? '' }}</h1>
  <JoinSession
    v-model:sessionUsername="sessionUsername"
    v-model:session-observer="sessionObserver"
    @join-session="joinSession"
    v-if="!store.whoami"
  />
</template>

<style>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid var(--border-blue);
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: var(--light-blue);
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--border-blue);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid var(--dark-blue);
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>