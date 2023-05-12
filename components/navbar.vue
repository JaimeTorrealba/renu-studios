<script setup>
const menuContent = ref(null);

onClickOutside(menuContent, () => closeMenu());
const mobileNav = ref(false);

const showMenu = () => {
  mobileNav.value = true;
};
const closeMenu = () => {
  if (menuContent.value) {
    mobileNav.value = false;
  }
};
</script>
<template>
  <header>
    <nav>
      <NuxtLink to="/" class="flex">
        <icons
          view-box="0 0 24 24"
          width="24"
          height="24"
          icon-name="home"
          stroke-width="1.5"
          iconColor="none"
          stroke="currentColor"
          class="mr-1"
        >
          <IconsHome />
        </icons>
        Home
      </NuxtLink>
      <div class="nav-desk">
        <NuxtLink to="/aboutUs" style="padding-right: var(--space-3)">
          {{ $t("about") }}
          <icons
            view-box="0 0 24 24"
            width="24"
            height="24"
            icon-name="about"
            stroke-width="1.5"
            icon-color="none"
            line-cap="round"
            stroke-linejoin="round"
            stroke="currentColor"
            @click="showMenu()"
          >
            <IconsAbout />
          </icons>
        </NuxtLink>
        <NuxtLink to="/contactUs">
          {{ $t("contact") }}
          <icons
            view-box="0 0 24 24"
            width="24"
            height="24"
            icon-name="contact"
            stroke-width="1.5"
            iconColor="none"
            stroke="currentColor"
            class="mr-1"
          >
            <IconsContact />
          </icons>
        </NuxtLink>
      </div>
      <div class="nav-mobile">
        <icons
          view-box="0 0 24 24"
          width="24"
          height="24"
          icon-name="menu"
          stroke-width="1.5"
          fill="none"
          line-cap="round"
          stroke-linejoin="round"
          stroke="currentColor"
          @click="showMenu()"
        >
          <IconsMenu />
        </icons>
        <Transition>
          <div v-show="mobileNav" class="mobile-nav" ref="menuContent">
            <NuxtLink @click="closeMenu()" to="/aboutUs">
              <icons
                view-box="0 0 24 24"
                width="24"
                height="24"
                icon-name="about"
                stroke-width="1.5"
                iconColor="none"
                line-cap="round"
                stroke-linejoin="round"
                stroke="currentColor"
                @click="showMenu()"
              >
                <IconsAbout />
              </icons>
              {{ $t("about") }}
            </NuxtLink>
            <NuxtLink @click="closeMenu()" to="/contactUs">
              <icons
                view-box="0 0 24 24"
                width="24"
                height="24"
                icon-name="contact"
                stroke-width="1.5"
                iconColor="none"
                stroke="currentColor"
                class="mr-1"
              >
                <IconsContact />
              </icons>
              {{ $t("contact") }}
            </NuxtLink>
          </div>
        </Transition>
      </div>
    </nav>
  </header>
</template>
<style lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3) 0;
}
a {
  color: var(--text-color);
  text-decoration: none;
  font-family: "Merienda-Bold";
}
.mobile-nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10%;
  right: 0;
  background: var(--gray-color);
  padding: var(--space-3) var(--space-2);
  border-radius: 8px;
  box-shadow: var(--shadow-layout);
  a {
    margin: var(--space-2) 0;
  }
}
.nav-desk {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.nav-mobile {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
