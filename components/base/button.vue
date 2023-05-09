<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: false,
    default: "",
  },
});
</script>
<template>
  <div>
    <button v-if="!to">{{ text }}</button>
    <NuxtLink v-else :to="to">
      <button>{{ text }}</button>
    </NuxtLink>
  </div>
</template>
<style scoped>
button {
  background: var(--primary-color);
  font: inherit;
  color: var(--white-color);
  outline-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: var(--space-2) var(--space-3);
  box-shadow: var(--shadow-default);
  border-radius: 20px;
  border-width: 0;
  cursor: pointer;
}
button:active {
  box-shadow: var(--shadow-default-active);
}
a {
  text-decoration: none;
  font-family: "Merienda-Bold";
}
</style>
