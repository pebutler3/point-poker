<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://moerqnfdfdkgbmqvurin.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZXJxbmZkZmRrZ2JtcXZ1cmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTk5MjIsImV4cCI6MTk5NTE3NTkyMn0.MfVmwTXQHW5zeNkAXgiIfgmqmNx2LgQjPh0ANstCSpM')
clearNuxtState('session');
const router = useRouter();
const storyUsers = ref([]);

const storyId = router.currentRoute?.value?.params?.id[0];

const getStory = async () => {
  let { data: stories, error } = await supabase
    .from('stories')
    .select()
    .eq('id', storyId)

  return stories;
}

const story = await getStory();

const getStoryUsers = async () => {
  let { data: users, error } = await supabase
    .from('users')
    .select()
    .eq('session_id', story[0].session_id)

  storyUsers.value = users;
}

getStoryUsers();
</script>

<template>
  <h1>{{ story[0].title }}</h1>
  <ul>
    <li v-for="{ username } in storyUsers">{{ username }}</li>
  </ul>
</template>
