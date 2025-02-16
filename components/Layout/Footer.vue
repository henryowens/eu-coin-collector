<script setup lang="ts">
import { useQueryClient } from "@tanstack/vue-query";

import queries from "~/queries";

const isAuthDialogOpen = ref(false);
const isCookieConsentDialogOpen = ref(false);

const user = useSupabaseUser();
const supabase = useSupabaseClient();

const queryClient = useQueryClient();

const onLogout = async () => {
  await supabase.auth.signOut();
  console.log("resettign queries");
  queryClient.resetQueries({
    queryKey: queries.selectedCoins.list._def,
    exact: true,
  });
};
</script>

<template>
  <footer class="footer">
    <NuxtLink
      class="footer--logo"
      to="/"
    >
      <svg
        class="w-7 h-auto"
        width="49"
        height="43"
        viewBox="0 0 56 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5158 38.8242L4 46L15.2658 30.8015L4 17.8275H19.5468L30 4L33.4532 17.8275H52L37.7342 30.8015L37 45.5L26.5158 38.8242Z"
          stroke="#FFD617"
          stroke-width="6.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <p>EU Coin Collector</p>
    </NuxtLink>

    <div class="footer--sitemap">
      <Button @click="isCookieConsentDialogOpen = true">Cookie Consent</Button>
      <Button
        v-if="user"
        @click="() => onLogout()"
      >
        Logout
      </Button>
      <Button
        v-else
        @click="isAuthDialogOpen = true"
      >
        Login
      </Button>
    </div>
  </footer>
  <AuthDialog v-model="isAuthDialogOpen" />
  <CookieConsentDialog v-model="isCookieConsentDialogOpen" />
</template>

<style lang="postcss" scoped>
.footer {
  @apply bg-masala-900;
  @apply flex justify-between items-center;
  @apply p-4 sm:p-6;
  @apply cursor-pointer;
  &--logo {
    @apply flex justify-between items-center;
    @apply gap-2 sm:gap-3;
    > p {
      @apply italic text-base;
      @apply font-extrabold;
      @apply text-masala-50;
      letter-spacing: 4px;
      font-family: Urbanist;
    }
  }
  &--sitemap {
    @apply flex gap-4 text-masala-50 font-thin tracking-wider;
    button {
      @apply cursor-pointer hover:underline !p-0 bg-transparent h-fit text-base text-masala-50 font-thin tracking-wider hover:bg-transparent;
    }
  }
}
</style>
