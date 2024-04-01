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
  background-color: #150f5c;
  font-size: 1.5rem;
  padding: 1rem;
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
