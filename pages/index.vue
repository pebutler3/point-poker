<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://moerqnfdfdkgbmqvurin.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZXJxbmZkZmRrZ2JtcXZ1cmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTk5MjIsImV4cCI6MTk5NTE3NTkyMn0.MfVmwTXQHW5zeNkAXgiIfgmqmNx2LgQjPh0ANstCSpM')
const sessions = useState('sessions');
const router = useRouter();

async function getSessions() {
  const { data } = await supabase.from('sessions').select()
  useSessions(data);
}

onMounted(async () => {
  // const { error } = await supabase
  //   .from('sessions')
  //   .insert({ session_name: 'xxx' })
  getSessions();
})

const createSession = async (title) => {
  const { error, data } = await supabase
    .from('sessions')
    .insert({ session_name: title })
    .select()

  // router.push(`/sessions/${data[0].id}`)
  router.push(`/sessions/join/${data[0].id}`)
};

const removeSession = async (sessionId) => {
  const { error } = await supabase
    .from('sessions')
    .delete()
    .eq('id', sessionId)
}

</script>

<template>
  <CreateSession @create-session="createSession" />
  <h1>Sessions</h1>
  <ul class="session-list">
    <li class="session-list__list-item" v-for="session in sessions" :key="session?.id">
      <NuxtLink class="session-list__list-item-link" :to="`sessions/${session?.id}`" prefetch>
        {{ session?.session_name }}
      </NuxtLink>
      <button @click="removeSession(session.id)">X</button>
    </li>
  </ul>
</template>

<style>
/* CSS */
button {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: background-color 250ms linear;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

button:hover {
  background-color: #f0d8d4;
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
