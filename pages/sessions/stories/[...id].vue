<script setup>
import { onMounted } from 'vue';
const supabase = useSupabaseClient();
const store = useSession();
const router = useRouter();
const storyId = router.currentRoute?.value?.params?.id[0];
const storiesPoints = ref([]);

const { data, refresh } = await useAsyncData('story_points', async () => {
  const { data } = await client.from('story_points').select('points')
  return data
})

const story = await useGetStoryById(supabase, storyId);

useGetStoryUsers(supabase, await story[0].session_id);

const handleInserts = (payload) => {
  console.log('PAYLOAD', payload)
}

onMounted(async () => {
  supabase.channel('story-points-channel')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'story_points' }, handleInserts)
    .subscribe()

  storiesPoints.value = await useStoriesPoints(supabase, storyId)
})
</script>

<template>
  <div class="flex flex--column">
    <!-- <NuxtLink :to="`/sessions/${store.activeSession.id}`">Back</NuxtLink> -->
    <h1>{{ story[0].title }}</h1>
    <div class="flex">
      <button v-for="point in store.pointOptions">
        {{ point }}
      </button>
    </div>
    <ul>
      <li v-for="{ id, username } in store.activeSession.users">
        <span v-if="id === store.whoami">*</span>
        {{ username }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

button {
  margin: 0 0.25rem;
}
</style>
