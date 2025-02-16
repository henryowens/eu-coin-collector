<script setup lang="ts">
import { useQueryClient } from "@tanstack/vue-query";

import queries from "~/queries";

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

const isLoginDialogOpen = ref(false);
</script>

<template>
  <header class="header">
    <div class="header--logo">
      <svg
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
    </div>
    <AuthDialog
      :key="user?.id || 'unauthenticated'"
      v-model="isLoginDialogOpen"
      :has-trigger="false"
    />
    <Button
      v-if="!user"
      @click="isLoginDialogOpen = true"
    >
      Login
    </Button>
    <div
      v-else
      class="flex items-center gap-x-3"
    >
      <ProfileDialog />

      <Button @click="onLogout">Logout</Button>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.header {
  @apply bg-masala-900;
  @apply flex justify-between items-center;
  @apply p-4 sm:p-6;
  &--logo {
    @apply flex justify-between items-center;
    @apply gap-2 sm:gap-3;
    > p {
      @apply italic text-base sm:text-lg;
      @apply font-extrabold;
      @apply text-masala-50;
      letter-spacing: 4px;
      font-family: Urbanist;
    }
  }
}
</style>
