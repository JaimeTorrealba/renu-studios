<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Co-founder",
  },
  name: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <article class="flex flex-column">
    <h2 class="text-center small-title">
      {{ title }}
    </h2>
    <div class="flex flex-center">
      <slot name="avatar" />
    </div>
    <h3 class="text-center">
      {{ name }}
    </h3>
    <div class="flex flex-center">
      <slot name="sign" />
    </div>
  </article>
</template>
<style lang="scss" scoped>
article {
  background: var(--gray-color);
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.5),
    5px 5px 15px rgba(136, 160, 183, 0.25);
  border-radius: 20px;
  padding: var(--space-1) var(--space-4);
  margin: 0 var(--space-2);
  @media screen and (max-width: 960px) {
    margin-top: var(--space-4);
  }
}
h2 {
  margin-bottom: 0;
}
</style>
