<script setup>
const cardCatherineRef = ref();
const { isOutside } = useMouseInElement(cardCatherineRef);

</script>
<template>
  <Cards
    name="Catherine Oughtibridge"
    description="Content strategist/UX writer"
    ref="cardCatherineRef"
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
        <!-- <IconsJaimeAvatar :isOutside="isOutside" /> -->
      </icons>
    </template>
    <template #sign>
      <icons
        view-box="0 0 450 290"
        width="120"
        height="120"
        preserveAspectRatio="xMidYMin meet"
        icon-name="Catherine-signature"
        iconColor="var(--white-color)"
        line-cap="round"
        stroke="var(--dark-color))"
      >
        <CardsCatherineSign :isOutside="isOutside" />
      </icons>
    </template>
  </Cards>
</template>
