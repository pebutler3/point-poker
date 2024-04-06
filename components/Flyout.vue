<script setup>
const props = defineProps(['title', 'showFlyout']);
const emit = defineEmits(['close-flyout']);
</script>

<template>
  <template v-if="showFlyout">
    <div class="overlay"></div>
    <aside v-if="showFlyout">
      <button @click="emit('close-flyout')">X</button>
      <h2>{{ title }}</h2>
      <slot />
    </aside>
  </template>
</template>

<style scoped>
.overlay {
  background: var(--light-blue);
  width: 100%;
  position: fixed;
  height: 100%;
  z-index: 1;
  opacity: 0.25;
}

aside {
  background-color: white;
  box-shadow: -6px 3px 20px 0px #8080807d;
  height: 100%;
  right: 0;
  padding: 0 2rem;
  position: fixed;
  width: 25%;
  z-index: 2;
}
</style>