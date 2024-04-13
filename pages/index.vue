<script setup>
import { v4 as uuidv4 } from 'uuid';
import generateRandomTitle from '~/utils/generateRandomTitle';

const supabase = useSupabaseClient();
const router = useRouter();
const sessionStore = useSession();
const sessionsStore = useSessions();

async function getSessions() {
  const { data } = await supabase.from('sessions').select()
  sessionsStore.setSessions(data);
}

onMounted(async () => {
  await getSessions();
})

const createTemporarySession = () => {
  sessionStore.setTemporarySession({
    id: uuidv4(),
    session_name: generateRandomTitle(),
  })
  router.push('/sessions/create');
}

// const createSession = async (title) => {
//   const { error, data } = await supabase
//     .from('sessions')
//     .insert({ session_name: generateRandomTitle() })
//     .select()

//   sessionStore.setActiveSession(data[0]);
//   // router.push(`/sessions/${data[0].id}`);
//   router.push('/sessions/create');
// };

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
