<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/" prefetch>Home</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--dark-blue);
  font-size: 1.5rem;
  padding: 1rem;
  position: fixed;
  width: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
