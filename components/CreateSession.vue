<script setup>
const emit = defineEmits(['create-session'])
const title = ref('');
</script>

<template>
  <form @submit.prevent>
    <label for="title">
      <input id="title" type="text" placeholder="Name your session" v-model="title" />
    </label>
    <button @click="emit('create-session', title)">Create Session</button>
  </form>
</template>
