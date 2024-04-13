<script setup>
const sessionUsername = defineModel('sessionUsername');
const sessionObserver = defineModel('sessionObserver');

const emits = defineEmits(['join-session']);

const joinSession = () => emits('join-session', {
  sessionUsername: sessionUsername,
  sessionObserver: sessionObserver
})
</script>

<template>
  {{ sessionUsername }}
  <form class="flex flex--column" @submit.prevent>
    <label for="joinSession" />
    <input type="text" id="joinSession" placeholder="Username" v-model="sessionUsername" />
    <label class="container my-1" for="observer">Observer?
      <input type="checkbox" id="observer" name="observer" v-model="sessionObserver">
      <span class="checkmark"></span>
    </label>
    <button @click="joinSession">Join</button>
  </form>
</template>