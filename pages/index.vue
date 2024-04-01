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

</script>

<template>
  <div>
    <CreateSession @create-session="createSession" />
    <hr />
    <h1>Sessions</h1>
    <li v-for="session in sessions" :key="session?.id">
      <NuxtLink :to="`sessions/${session?.id}`" prefetch>
        {{ session?.session_name }}
      </NuxtLink>
    </li>
  </div>
</template>
