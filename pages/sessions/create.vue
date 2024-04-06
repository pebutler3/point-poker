<script setup>
const supabase = useSupabaseClient();
const store = useSession();
const storyTitle = ref(null);

const createStory = async () => {
  const { error, data } = await supabase
    .from('stories')
    .insert({ title: storyTitle.value, session_id: store.activeSession.id })
    .select()
}
</script>
<template>
  <h1>Create a new story</h1>
  <form @submit.prevent>
    <label for="createStory" />
    <input type="text" id="createStory" placeholder="Story Name" v-model="storyTitle" />
    <button @click="createStory">Creat New Story</button>
  </form>
</template>
