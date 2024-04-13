<script setup>
import { onBeforeMount } from 'vue';
import { useSession } from '../../stores/session';

const store = useSession();
const supabase = useSupabaseClient();
const sessionUsername = ref(null);
const sessionObserver = ref(false);

definePageMeta({
  middleware: ['session-stories']
});
// const router = useRouter();
// const sessionUsername = ref(null);
// const isInSession = ref(false);
// const sessionStorage = ref({});
// const shouldShowFlyout = ref(false);

const { data } = await supabase.from('sessions')
  .select()
  .eq('id', useRouter()
  .currentRoute.value.params.id[0])

store.setActiveSession(...data)

useGetSessionUsers(supabase, await store.activeSession.session_id);

// const joinSession = async () => {

//   const { data, error } = await supabase
//     .from('users')
//     .insert({
//         username: sessionUsername.value,
//         session_id: store.activeSession.id
//       })
//     .select()
          
//   const { id, session_id, username } = data[0];

//   if (!error) {
//     store.setPokerPoints({ id, session_id, username });
//     isInSession.value = true;
//   }
// }

// const createStory = async () => {
//   const { error, data } = await supabase
//     .from('stories')
//     .insert({ title: storyTitle.value, session_id: store.activeSession.id })
//     .select()

//     router.push(`/sessions/stories/${data[0].id}`)
// }

onBeforeMount(() => {
  // if (JSON.parse(localStorage.getItem('pokerPoints'))) {
  //   isInSession.value = true;
  //   store.setPokerPoints();
  // }
})
</script>

<template>
  <ClientOnly>
    <h1>{{ store.activeSession?.session_name }}</h1>
    <!-- <form class="flex flex--column" v-if="!store.whoami" @submit.prevent>
      <label for="joinSession" />
      <input type="text" id="joinSession" placeholder="Username" v-model="sessionUsername" />
      <label class="flex" for="observer">
        <input type="checkbox" name="observer" id="observer">
        Observer?
      </label>
      <button @click="joinSession">Join</button>
    </form> -->
    <!-- <ul>
      <li>
        <NuxtLink to="" @click="shouldShowFlyout = true">+</NuxtLink>
      </li> -->
      <!-- <li v-for="story in store.stories">
        <NuxtLink :to="`/sessions/stories/${story.id}`" prefetch>
          {{ story.title }}
        </NuxtLink>
        <small>{{  parseDate(story.created_at) }}</small>
      </li> -->
    <!-- </ul> -->
    <JoinSession
      v-model:sessionUsername="sessionUsername"
      v-model:session-observer="sessionObserver"
      @join-session="joinSession"
      v-if="!store.whoami"
    />
    <ul>
      <li v-for="{ id, username } in store.activeSession.users">
        {{ username }}
      </li>
    </ul>
  </ClientOnly>
</template>

<style scoped>
h1 {
  text-align: center;
}

ul {
  column-gap: 10px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat( auto-fit, minmax(500px, 1fr) );
  list-style: none;
  padding: 0;
  margin: 0;
}

li:first-of-type {
  border-style: dashed;
  display: flex;
  justify-content: center;
}

li:first-of-type a {
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 100%;
}

li {
  border: 0.05rem solid var(--border-blue);
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  position: relative;
}

li a {
  align-items: center;
  color: var(--dark-blue);
  display: flex;
  padding: 1rem;
  text-decoration: none;
  transition: all 250ms linear;
}

li:not(:first-of-type) a::before {
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
}

small {
  background-color: white;
  border: 1px solid #00cfff;
  color: var(--dark-blue);
  display: flex;
  margin: 0;
  padding: 0.15rem 0.5rem;
  max-width: 50%;
  border-radius: 10px;
  margin: 0.25rem;
  position: absolute;
  top: -15px;
  right: 5px;
}
</style>
