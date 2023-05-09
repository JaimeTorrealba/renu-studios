<script setup>
import gsap from "gsap";

const titleRef = ref();
const buttonRef = ref();

onMounted(() => {
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "power2.out", opacity: 0, y: -50 },
  });
  tl.from(titleRef.value, {
    delay: 0.5,
  });
  tl.from(buttonRef.value, { y: 50 }, "1");
});

const createCharacter = () => {
  console.log("Character created");
};
</script>
<template>
  <section class="container">
    <div class="title-area">
      <div>
        <h1 class="sub-title text-center" ref="titleRef">Renu Studios</h1>
      </div>
    </div>
    <div class="description-area">
      <FormKit type="form" @submit="createCharacter" >
        <FormKit
        type="text"
        name="name"
        id="name"
        label="Name"
        help="Your full name"
        placeholder="“Jon Doe”"
        validation="required|alpha_spaces:latin"
        validation-visibility="live"
      />
    </FormKit>
      <div class="flex flex-center" ref="buttonRef">
        <BaseButton class="mt-4" :text="$t('contact')" to="/contactus" />
      </div>
    </div>
    <div class="canvas-area debug"></div>
  </section>
</template>
<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    "title-area canvas-area"
    "description-area canvas-area";
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "title-area"
      "canvas-area"
      "description-area";
  }
}
    
.title-area {
  grid-area: title-area;
  display: grid;
  place-items: center;
}

.description-area {
  grid-area: description-area;
}

.canvas-area {
  grid-area: canvas-area;
}
</style>
