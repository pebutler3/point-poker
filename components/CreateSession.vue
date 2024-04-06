<script setup>
const emit = defineEmits(['create-session'])
const title = ref('');
const errors = ref(null);

const createSession = (c) => {
  // validateForm();
  emit('create-session', title.value)
}

const validateForm = () => {
  // We'll need to sanitize inputs!
  if (!title) {
    errors.value = "Session Name required"
    return;
  }

  errors.value = null;
  return;
};
</script>

<template>
  <form @submit.prevent="createSession">
    <label for="title">
      <input id="title" type="text" placeholder="Session Name" v-model="title" required />
    </label>
    <button type="submit">Create Session</button>
  </form>
</template>
