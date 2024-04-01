<script setup>
const emit = defineEmits(['create-session'])
const title = ref('');
</script>

<template>
  <form @submit.prevent>
    <label for="title">
      <input id="title" type="text" placeholder="Session Name" v-model="title" required />
    </label>
    <button @click="emit('create-session', title)">Create Session</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
}

input {
  font-size: 2rem;
  padding: 0.15rem;
  margin-right: 0.5rem;
}
</style>
