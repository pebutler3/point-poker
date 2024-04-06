<script setup>
const joinSession = () => {

}
</script>

<template>
  <form class="flex flex--column" @submit.prevent>
    <label for="username">What should we call you?</label>
    <input id="username" type="text" placeholder="Username" autocomplete="off" />
    <button @click="joinSession($event)">Join Session</button>
  </form>
</template>
