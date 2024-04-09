<script setup>
import { onMounted } from 'vue';
const supabase = useSupabaseClient();
const store = useSession();
const router = useRouter();
const storyId = router.currentRoute?.value?.params?.id[0];
const storiesPoints = ref([]);
const userHasVoted = ref(false);
const usersPoints = ref(null);

const { data, refresh } = await useAsyncData('story_points', async () => {
  const { data } = await client.from('story_points').select('points')
  return data
})

const story = await useGetStoryById(supabase, storyId);

useGetStoryUsers(supabase, await story[0].session_id);

const handleInserts = (payload) => {
  console.log(payload)
  usersPoints.value = payload['new'].points;
  // console.log(usersPoints)
}

const getUsersPoints = (id) => {
  // const user = storiesPoints?.find((user) => user.id === id)
  // console.log(user);
}

const pointsSelected = async (points) => {
  
  const { data, error } = await supabase
    .from('story_points')
    .update({ points })
    .eq('story_id', storyId)
    .select()

    if (data.length < 1) {
      const { data, error } = await supabase
        .from('story_points')
        .insert([{ points, story_id: storyId, user_id: store.whoami }])
        .select()
    }

    if (error) {
      console.log(error)
      return;
    }
}

onMounted(async () => {
  supabase.channel('story-points-channel')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'story_points' }, handleInserts)
    .subscribe()

  storiesPoints.value = await useStoriesPoints(supabase, storyId)
})
</script>

<template>
  <div class="flex flex--column">
    <!-- <NuxtLink :to="`/sessions/${store.activeSession.id}`">Back</NuxtLink> -->
    <h1>{{ story[0].title }}</h1> {{ story[0].id }}
    <div class="flex">
      <button v-for="points in store.pointOptions" @click="pointsSelected(points)">
        {{ points }}
      </button>
    </div>
    <ul>
      <li v-for="{ id, username } in store.activeSession.users">
        <span v-if="id === store.whoami">*</span>
        {{ username }} - {{ getUsersPoints(id) }}
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
