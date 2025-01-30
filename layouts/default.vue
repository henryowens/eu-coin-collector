<script setup lang="ts">
const { selectedCoins } = useSelectedCoins();

const onClear = () => (selectedCoins.value = []);
</script>

<template>
  <div class="default__layout">
    <header class="default__layout--header">
      <div class="default__layout--header--logo">
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
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.default__layout {
  @apply flex flex-col min-h-screen bg-masala-50;

  &--header {
    @apply bg-masala-900;
    @apply flex justify-between items-center;
    @apply p-6 mb-3;
    &--logo {
      @apply flex justify-between items-center;
      @apply gap-3;
      > p {
        @apply italic text-lg;
        @apply font-extrabold;
        @apply text-masala-50;
        letter-spacing: 4px;
        font-family: Urbanist;
      }
    }
  }
}
</style>
