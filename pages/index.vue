<script setup>
const supabase = useSupabaseClient();
const router = useRouter();
const sessionStore = useSession();
const sessionsStore = useSessions();

async function getSessions() {
  const { data } = await supabase.from('sessions').select()
  // useSessionsx(data);
  sessionsStore.setSessions(data);
}

onMounted(async () => {
  await getSessions();
})

const createSession = async (title) => {
  const { error, data } = await supabase
    .from('sessions')
    .insert({ session_name: title })
    .select()

  sessionStore.setActiveSession(data[0].id);
  router.push(`/sessions/${data[0].id}`);
};

const removeSession = async (sessionId) => {
  const { error } = await supabase
    .from('sessions')
    .delete()
    .eq('id', sessionId)
    
    getSessions();
}
</script>

<template>
  <div>
    <CreateSession @create-session="createSession" />
    <h1>Sessions</h1>
    <ul class="session-list">
      <li class="session-list__list-item" v-for="session in sessionsStore.allSessions" :key="session?.id">
        <NuxtLink class="session-list__list-item-link" :to="`sessions/${session?.id}`" prefetch>
          {{ session?.session_name }}
        </NuxtLink>
        <button @click="removeSession(session.id)">X</button>
      </li>
    </ul>
  </div>
</template>

<style>
html,
body,
#__nuxt,
main {
  height: 100%;
}

.session-list {
  margin: 0;
  padding: 0;
}

.session-list__list-item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}

.session-list__list-item-link {
  text-decoration: none;
}
</style>
