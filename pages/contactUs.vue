<script setup>
const titleRef = ref();

onMounted(() => {
  useAppear(titleRef.value)
});
</script>
<template>
  <section>
    <h1 class="sub-title text-center" ref="titleRef">Renu Studios</h1>
    <div class="container">
      <Form />
      <div class="canvas-area">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.0454793890294!2d-72.22419718805509!3d-39.278612064265694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961463a0e46acf33%3A0xf282088d874e46e4!2sCamilo%20Henr%C3%ADquez%2025%2C%20Villarrica%2C%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1684163066432!5m2!1ses!2scl" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
.canvas-area {
  position: relative;
  border-radius: 0.25rem;
  @media screen and (max-width: 768px) {
    height: 30vh;
    margin-top: var(--space-3);
    padding: 0 var(--space-4);
  }
}
</style>
