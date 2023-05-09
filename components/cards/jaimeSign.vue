<script setup>
import gsap from "gsap";
const props = defineProps({
  isOutside: {
    type: Boolean,
    required: true,
  },
});

onMounted(() => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  if (!isLargeScreen.value) {
    gsap.to(".jaimeSignature", {
      strokeDashoffset: 0,
      duration: 1.25,
      ease: "none",
      delay: 0.15,
    });
  }
});

watch(props, () => {
  if (!props.isOutside) {
    gsap.to(".jaimeSignature", {
      strokeDashoffset: 0,
      duration: 1.25,
      ease: "none",
      delay: 0.15,
    });
  }
});
</script>
<template>
  <path
    class="jaimeSignature"
    fill="var(--gray-color)"
    stroke="var(--dark-color)"
    d="M117.64,160.65c-5.41,1.84-10.81,3.67-16.22,5.51c9.35-50.47,43.25-95.81,89.01-119.05
	c-12.49,82.76-59.16,159.83-126.71,209.25c21.02-45.24,60.23-81.72,106.87-99.42c9.07-7.17,18.13-14.34,27.2-21.52
	c-2.77,3.95-5.54,7.9-8.31,11.85c5.74-2.7,11.49-5.4,17.23-8.1c8.22,1.92,17.43-3.98,19.12-12.25c-1.87,3.08-3.75,6.17-5.62,9.25
	c4.57,0.32,9.15,0.63,13.72,0.95c16.61-15.1,27.82-36.03,31.17-58.22c-22.87,51.91-64.34,95.4-115.11,120.7
	c62.07-90.87,155.62-159.78,260.8-192.13"
  />
</template>
<style scoped>
.jaimeSignature {
  transform: scale(0.4);
  stroke-width: 5;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
}
</style>
