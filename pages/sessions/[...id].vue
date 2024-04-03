<script setup>
import { createClient } from '@supabase/supabase-js'
import { useSession } from '../../stores/session'

definePageMeta({
  middleware: ['session-stories']
});

const store = useSession();

const supabase = createClient('https://moerqnfdfdkgbmqvurin.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZXJxbmZkZmRrZ2JtcXZ1cmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTk5MjIsImV4cCI6MTk5NTE3NTkyMn0.MfVmwTXQHW5zeNkAXgiIfgmqmNx2LgQjPh0ANstCSpM')
clearNuxtState('session');
const router = useRouter();

const { data } = await supabase.from('sessions')
  .select()
  .eq('id', useRouter()
  .currentRoute.value.params.id[0])

store.setActiveSession(...data)
</script>

<template>
  <h1>{{ store.activeSession?.session_name }}</h1>
  <ul v-if="sessionStories">
    <li v-for="story in store.stories">
      <NuxtLink :to="`/sessions/stories/${story.id}`" prefetch>{{ story.title }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  text-align: center;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
} 

li {
  border: 0.05rem solid #00cfff;
  border-radius: 0.25rem;
  flex: 1;
  margin: 0.5rem;
}

li a {
  align-items: center;
  color: black;
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: all 250ms linear;
}

li a::before {
  content: "";
  background-color: #00cfff;
  border-radius: 100%;
  display: flex;
  height: 1rem;
  margin-right: 0.5rem;
  width: 1rem;
}

li a:hover {
  background-color: #00cfff69;
  color: black;
}
</style>
