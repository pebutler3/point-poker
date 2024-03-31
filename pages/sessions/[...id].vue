<script setup>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://moerqnfdfdkgbmqvurin.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZXJxbmZkZmRrZ2JtcXZ1cmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTk5MjIsImV4cCI6MTk5NTE3NTkyMn0.MfVmwTXQHW5zeNkAXgiIfgmqmNx2LgQjPh0ANstCSpM')
clearNuxtState('session');

const { data } = await supabase.from('sessions').select().eq('id', useRouter().currentRoute.value.params.id[0])
const session = useSession({ ...data })

// TEMPS
const tempUsers = [
  {
    name: "Paul",
    hasVoted: false,
    points: null
  },
  {
    name: "Marisa",
    hasVoted: true,
    points: 3
  },
  {
    name: "Avi",
    hasVoted: true,
    points: 3
  },
  {
    name: "Amelie",
    hasVoted: true,
    points: 3
  },
]
const pointOptions = [0, 0.5, 1, 2, 3, 5, 8, 13, 20, 40, 100];
</script>

<template>
  <h1>{{ session.session_name }}</h1>
  <button v-for="points in pointOptions">{{ points }}</button>
  <ul>
    <li v-for="user in tempUsers">
      <span>
        {{ user.name }} {{ user.hasVoted ? user.points : '-' }}
      </span>
    </li>
  </ul>
</template>

<style>
ul {
  list-style: none;
} 
</style>
