<script setup>
import { onMounted } from 'vue';
const supabase = useSupabaseClient();
const router = useRouter();
const sessionsStore = useSessions();

async function getSessions() {
  const { data } = await supabase.from('sessions').select()
  sessionsStore.setSessions(data);
}

const createTemporarySession = () => {
  useCreateTemporarySession();
  router.push('/sessions/create');
}

const removeSession = async (sessionId) => {
  const { error } = await supabase
    .from('sessions')
    .delete()
    .eq('id', sessionId)
    
    getSessions();
}

onMounted(async () => {
  useCreateTemporarySession();
  await getSessions();
})
</script>

<template>
  <div class="index__wrapper">
    <CreateSession @create-session="createTemporarySession" />
    <h1>Sessions</h1>
    <!-- Session List for Admins -->
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

.index__wrapper {
  min-width: 80%;
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