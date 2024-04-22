<template>
  <Nav />
  <main>
    <NuxtPage />
  </main>
</template>

<style>
:root {
  --light-blue: #00cfff69;
  --dark-blue: #0c0835;
  --border-blue: #00cfff;
  --off-white: #f2f2f2;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

  --mx-1: 0 1rem;
  --mx-2: 0 2rem;

  --my-1: 1rem 0;
  --my-2: 2rem 0;
}

html,
body {
  color: var(--dark-blue);
  font-family: var(--font-family);
  margin: 0;
}

main {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
}

.mx-1 {
  margin: 0 1rem !important;
}

.mx-2 {
  margin: 0 2rem !important;
}

.my-1 {
  margin: 1rem 0 !important;
}

.my-2 {
  margin: 2rem 0 !important;
}

input {
  border: 1px solid var(--border-blue);
  font-size: 2rem;
  padding: 0.5rem;
}

.btn {
  padding: 1rem;
  font-weight: bold;
  color: var(--dark-blue);
  border: 1px solid;
  border-radius: 5px;
  transition: all 250ms linear;
}

/* .btn:hover {
  background-color: var(--dark-blue);
  border-color: var(--dark-blue);
  color: white;
} */

.btn--primary {
  background-color: var(--dark-blue);
  border-color: var(--dark-blue);
  color: white;
}

.btn--secondary {
  background-color: var(--light-blue);
  border-color: var(--border-blue);
}

.btn--secondary:hover {
  background-color: var(--dark-blue);
  border-color: var(--dark-blue);
  color: white;
}

.btn--tertiary {
  background-color: white;
  border-color: var(--dark-blue)
}

.btn--tertiary:hover {
  background-color: var(--off-white);
}

button.with-margin {
  margin: 0.25rem 0;
}

.flex {
  display: flex;
}

.flex--column {
  flex-direction: column;
}

.flex--wrap {
  flex-wrap: wrap;
}
</style>
