<script setup>
const titleRef = ref();
const descriptionRef = ref();
const buttonRef = ref();
const cardSpace = ref();

onMounted(() => {
  useAppear(titleRef.value)
    .from(descriptionRef.value, { y: 50 }, "0.75")
    .from(buttonRef.value, { x: 0, y: 25 }, "1")
    .from(cardSpace.value.children, { x: 0, y: 15, stagger: 0.3 }, "0.75");
});
</script>
<template>
  <section class="flex flex-column container mt-4">
    <h1 class="sub-title" ref="titleRef">{{ $t("aboutTitle") }}</h1>
    <p ref="descriptionRef">
      {{ $t("aboutDescription") }}
    </p>
    <div
      class="flex flex-space-evenly mt-4 pr-3 pl-3 card-space"
      ref="cardSpace"
    >
      <CardsCatherine />
      <CardsJaime />
      <CardsJose />
    </div>
    <div class="flex flex-center mt-3" ref="buttonRef">
      <BaseButton class="mt-4" :text="$t('contact')" to="/contactus" />
    </div>
  </section>
</template>
<style scoped lang="scss">
.container {
  align-items: center;
}
.card-space {
  min-width: 80%;
}
p {
  max-width: 80%;
  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
}
</style>
