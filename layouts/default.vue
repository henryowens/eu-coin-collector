<script setup lang="ts">
const selectedCoins = useSelectedCoins();

const onClear = () => (selectedCoins.value = []);
</script>

<template>
  <div class="default__layout">
    <header>
      <div>
        <Icon
          class="my-1"
          name="circle-flags:eu"
          size="30"
        />
      </div>
      <div>
        <h1>EU Coin Collector</h1>
      </div>
      <div class="btns__conatiner">
        <Transition name="fade">
          <button
            v-if="selectedCoins.length"
            class="flex gap-1"
            @click="onClear"
          >
            Clear
            <span class="sm:flex hidden">Selected</span>
          </button>
        </Transition>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.default__layout {
  @apply flex flex-col h-screen;
}

header {
  @apply flex justify-between items-center;
  @apply p-4;
  @apply bg-gray-800 text-white;
  div {
    @apply flex-1;
  }
  .btns__conatiner {
    @apply flex;
    @apply justify-end;
  }
  h1 {
    @apply text-xl;
    @apply font-bold;
    @apply text-center;
  }
}

main {
  @apply p-4;
  @apply flex-1;
  @apply flex;
  @apply flex-col;
  @apply justify-center;
}
</style>
