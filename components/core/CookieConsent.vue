<script setup lang="ts">
const { cookieConsent, completedCookieConsent } = useCookieConsent();
const { gtag } = useGtag();

const isOpen = ref(false);

const closeCookieConsent = (consent?: boolean) => {
  cookieConsent.value = consent ?? false;

  isOpen.value = false;
  completedCookieConsent.value = true;
};

watch(cookieConsent, (consent) => {
  const value = consent ? "granted" : "denied";

  gtag("js", new Date());

  gtag("consent", "update", {
    ad_user_data: value,
    ad_personalization: value,
    ad_storage: value,
    analytics_storage: value,
  });
});
</script>

<template>
  <Transition name="fasde">
    <div
      v-if="!isOpen || completedCookieConsent"
      class="cookie__consent__icon"
      @click="() => (isOpen = true)"
    >
      <Icon name="material-symbols:cookie" />
    </div>
  </Transition>

  <Transition name="fade">
    <div
      v-if="isOpen || completedCookieConsent === false"
      class="cookie__consent"
    >
      <div class="cookie__consent--content">
        <p class="cookie__consent--content--title">
          This website uses cookies to ensure you get the best experience on our
          website.
        </p>
        <div class="cookie__consent--content--btns">
          <button
            class="btn__success"
            @click="() => closeCookieConsent(true)"
          >
            Accept
          </button>
          <button
            class="btn__danger"
            @click="() => closeCookieConsent()"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.cookie__consent__icon {
  @apply fixed;
  @apply bottom-0 left-0;
  @apply bg-gray-800;
  @apply text-white;
  @apply p-4 sm:p-2;
  @apply rounded-tr-lg;
  @apply cursor-pointer;
  svg {
    @apply w-8 h-8 sm:w-6 sm:h-6;
  }
}

.cookie__consent {
  @apply fixed;
  @apply bottom-0 left-0 right-0;
  @apply bg-gray-800;
  @apply text-white;
  @apply p-4;
  @apply flex;
  @apply justify-center;
  @apply items-center;

  &--content {
    @apply flex;
    @apply items-center;
    @apply justify-between;
    @apply max-w-[950px];
    @apply w-full;
    @apply gap-3 sm:gap-2;

    &--title {
      @apply text-sm sm:text-base;
    }
    &--btns {
      @apply flex;
      @apply gap-2;
    }
  }
}
</style>
