<script setup>
const cardJoseRef = ref();
const { isOutside } = useMouseInElement(cardJoseRef);
</script>
<template>
  <Cards
    name="Jose Cordova"
    :title="$t('card_title')"
    ref="cardJoseRef"
  >
    <template #avatar>
      <icons
        view-box="0 0 500 500"
        width="164"
        height="164"
        preserveAspectRatio="xMidYMin meet"
        icon-name="Jose-avatar"
        iconColor="var(--gray-color)"
        line-cap="round"
        stroke="var(--dark-color))"
      >
        <CardsJaimeAvatar :isOutside="isOutside" />
      </icons>
    </template>
    <template #sign>
      <icons
        view-box="0 0 450 290"
        width="120"
        height="120"
        preserveAspectRatio="xMidYMin meet"
        icon-name="Jose-signature"
        iconColor="var(--white-color)"
        line-cap="round"
        stroke="var(--dark-color))"
      >
        <CardsJaimeSign :isOutside="isOutside" />
      </icons>
    </template>
  </Cards>
</template>
