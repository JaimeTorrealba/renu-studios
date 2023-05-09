<script setup>
const { locale } = useI18n();

const chgLanguage = () => {
  locale.value = locale.value === "en" ? "es" : "en";
};
const tooltipText = computed(() => locale.value === "en" ? "Cambiar idioma" : "Change language");

</script>
<template>
  <section>
    <VTooltip>
      <BaseRoundButton @click="chgLanguage()">
        <icons
          view-box="0 0 24 24"
          width="24"
          height="24"
          icon-name="menu"
          stroke-width="1.5"
          iconColor="none"
          stroke="currentColor"
        >
          <IconsLanguages />
        </icons>
      </BaseRoundButton>
      <template #popper> {{ tooltipText }} </template>
    </VTooltip>
  </section>
</template>
<style scoped>
section {
  position: fixed;
  right: 5%;
  bottom: 20%;
}
button {
  margin: var(--space-1);
  cursor: pointer;
}
</style>
