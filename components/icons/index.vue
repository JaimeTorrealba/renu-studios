<script setup>
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  iconColor: {
    type: String,
    required: false,
    default: "var(--dark-color)",
  },
});
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :aria-labelledby="iconName"
    role="presentation"
    v-bind="$attrs"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
