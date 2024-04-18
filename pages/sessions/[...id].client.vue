<script setup>
import { useSession } from '../../stores/session';
const store = useSession();
const supabase = useSupabaseClient();
const sessionPoints = ref(null);
  
const { data } = await supabase.from('sessions')
  .select()
  .eq('id', useRouter()
  .currentRoute.value.params.id[0])

store?.setActiveSession(...data)

useGetSessionUsers(supabase, await store?.activeSession?.session_id);
sessionPoints.value = await useSessionPoints(useRouter().currentRoute.value.params.id[0]);


// const { data: story_points, error } = await supabase
//   .from('story_points')
//   .select("*")
//   .eq('session_id', useRouter().currentRoute.value.params.id[0])

//   console.log(story_points)
</script>

<template>
  <h1>{{ store?.activeSession?.session_name }}</h1>
  <JoinSession
    v-model:sessionUsername="store.sessionUsername"
    v-model:session-observer="store.sessionObserver"
    @join-session="useJoinSession"
    v-if="!store.isUserInSession"
  />
  <div class="points__wrapper" v-else>
    <button v-for="points in store.pointOptions">
      {{ points }}
    </button>
  </div>
  <ul>
    <li v-for="(user, i) in store.activeSession?.users">
      {{ user.username }} 
      <template v-if="sessionPoints.length > 0">{{ JSON.parse(sessionPoints[i]?.points) }}</template>
      <span v-if="user.id === store.whoami.id">*</span>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  text-align: center;
}

.sweet-list {
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

.points__wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
</style>
