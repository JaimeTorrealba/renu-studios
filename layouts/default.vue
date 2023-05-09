<template>
  <main>
    <navbar />
    <slot />
    <rrss />
    <languages />
  </main>
</template>
<style scoped>
main {
  min-width: 90vw;
  max-width: 90vw;
  min-height: 90vh;
  background: var(--gray-color);
  box-shadow: var(--shadow-layout);
  border-radius: 20px;
  padding: var(--space-3);
  display: grid;
  grid-template-rows: 0.01fr 1fr 0.01fr;
}
</style>
