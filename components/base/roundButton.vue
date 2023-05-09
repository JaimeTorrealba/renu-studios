<template>
  <button>
    <slot />
  </button>
</template>
<style scoped>
button {
  background: var(--gray-color);
  outline-color: var(--gray-color);
  border-color: var(--gray-color);
  padding: var(--space-2);
  box-shadow: var(--shadow-default);
  border-radius: 50%;
  border-width: 0;
}
button:active{
  box-shadow: var(--shadow-default-active);
}
</style>
