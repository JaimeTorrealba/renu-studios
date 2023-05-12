<script setup>
import gsap from "gsap";

const titleRef = ref();

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out", opacity: 0, y: -50 },
  });
  tl.from(titleRef.value, {
    delay: 0.5,
  });
});
</script>
<template>
  <section>
    <h1 class="sub-title text-center" ref="titleRef">Renu Studios</h1>
    <div class="container">
      <Form />
      <div class="canvas-area debug">
        {{ $t("address") }}
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: var(--space-2);
  @media screen and (max-width: 1024px) {
    grid-template-columns: 0.75fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
