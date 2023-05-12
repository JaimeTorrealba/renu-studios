<script setup>
const cardJaimeRef = ref();
const { isOutside } = useMouseInElement(cardJaimeRef);

</script>
<template>
  <Cards
    name="Jaime Torrealba"
    :title="$t('card_title')"
    :description="$t('card_jaime_title')"
    ref="cardJaimeRef"
  >
    <template #avatar>
      <icons
        view-box="0 0 500 500"
        width="164"
        height="164"
        preserveAspectRatio="xMidYMin meet"
        icon-name="Jaime-avatar"
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
        icon-name="Jaime-signature"
        iconColor="var(--white-color)"
        line-cap="round"
        stroke="var(--dark-color))"
      >
        <CardsJaimeSign :isOutside="isOutside" />
      </icons>
    </template>
  </Cards>
</template>
