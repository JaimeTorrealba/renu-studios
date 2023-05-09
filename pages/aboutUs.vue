<script setup>
import gsap from "gsap";

const titleRef = ref();
const descriptionRef = ref();
const buttonRef = ref();
const cardSpace = ref();

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out", opacity: 0, x: -50 },
  });
  tl.from(titleRef.value, {
    delay: 0.5,
  });
  tl.from(descriptionRef.value, { x: 50 }, "0.75");
  tl.from(buttonRef.value, { x: 0, y: 25 }, "1");
  tl.from(cardSpace.value.children, { x: 0, y: 15, stagger: 0.3 }, "0.75");
});
</script>
<template>
  <section class="flex flex-column container mt-4">
    <h1 class="sub-title" ref="titleRef">{{ $t("aboutTitle") }}</h1>
    <p ref="descriptionRef">
      {{ $t("aboutDescription") }} Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Ipsam hic reiciendis consequuntur molestias iste non
      architecto et aliquam tempore. Magnam ipsum unde quaerat praesentium
      corrupti debitis iusto dicta laborum nostrum!
    </p>
    <div class="flex flex-space-evenly mt-4 pr-3 pl-3 card-space" ref="cardSpace">
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
