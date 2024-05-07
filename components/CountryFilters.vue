<script setup lang="ts">
const selectedCountries = defineModel<number[]>({
  default: [],
});

const { data: countries, suspense } = useCountries();

onServerPrefetch(async () => await suspense());

const onCountryClicked = (id: number) => {
  const index = selectedCountries.value.findIndex(
    (selectedId) => selectedId === id,
  );

  if (index === -1) selectedCountries.value.push(id);
  else selectedCountries.value.splice(index, 1);
};

const onResetCountries = () => (selectedCountries.value = []);
</script>

<template>
  <div class="filters">
    <div class="flex justify-between align-center mb-3">
      <h2>Include Countries</h2>

      <button
        class="btn__sm"
        @click="onResetCountries"
      >
        Reset
      </button>
    </div>
    <div class="filters--flag__container">
      <p
        v-for="({ flag, id }, index) in countries"
        :key="index"
        class="filters--flag__container--flag"
        :class="selectedCountries.includes(id) ? 'bg-gray-300' : 'bg-gray-100'"
        @click="() => onCountryClicked(id)"
      >
        {{ flag }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filters {
  @apply mb-6;
  @apply p-4;
  @apply px-6;
  @apply rounded-lg;
  @apply bg-slate-100;
  @apply m-auto;
  max-width: 950px;

  h2 {
    @apply text-xs;
    @apply text-gray-500;
    @apply font-bold;
    @apply mb-4;
    @apply uppercase;
  }

  &--flag__container {
    @apply flex;
    @apply gap-4;
    @apply flex-wrap;
    @apply justify-center;
    &--flag {
      @apply text-2xl;
      @apply cursor-pointer;
      @apply px-3;
      @apply rounded-sm;
      @apply transition-all;
      &:hover {
        @apply bg-gray-300;
        @apply transition-all;
      }
    }
  }
}
</style>
