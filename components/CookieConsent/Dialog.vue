<script setup lang="ts">
const { cookieConsent, completedCookieConsent } = useCookieConsent();
const { gtag } = useGtag();

const isOpen = defineModel<boolean>({
  default: false,
});

const setGtagConsent = (consent: boolean) => {
  const value = consent ? "granted" : "denied";

  gtag("js", new Date());

  gtag("consent", "update", {
    ad_user_data: value,
    ad_personalization: value,
    ad_storage: value,
    analytics_storage: value,
  });
};

const closeCookieConsent = (consent?: boolean) => {
  cookieConsent.value = consent ?? false;
  setGtagConsent(cookieConsent.value);
  isOpen.value = false;
  completedCookieConsent.value = true;
};
</script>

<template>
  <Drawer v-model:open="isOpen">
    <DrawerContent>
      <div
        class="max-w-[1000px] w-full flex flex-col md:flex-row items-center justify-between m-auto pb-4"
      >
        <DrawerHeader class="max-w-none md:max-w-2xl text-left">
          <DrawerTitle>
            This website uses cookies to ensure you get the best experience on
            our website.
          </DrawerTitle>
          <DrawerDescription>
            These help improve your experience and functionality of the website.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter class="flex gap-2 flex-col md:flex-row w-full md:w-auto">
          <Button
            size="lg"
            @click="() => closeCookieConsent(true)"
          >
            Allow
          </Button>

          <Button
            size="lg"
            variant="secondary"
            @click="() => closeCookieConsent(false)"
          >
            Deny
          </Button>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
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
