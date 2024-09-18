<script setup lang="ts">
import type { Country } from "~/models/countries";

const props = defineProps<Country>();

provide("country", props);
</script>

<template>
  <div class="coin__set">
    <h2 class="coin__set--title">
      <span class="coin__set--title--icon">
        {{ flag }}
      </span>
      <span class="coin__set--title--name">
        {{ name }}
      </span>
    </h2>
    <CoinSet
      v-for="(set, setIndex) in coinSet"
      :key="setIndex"
      v-bind="set"
    />
  </div>
</template>

<style lang="scss" scoped>
.coin__set {
  @apply flex flex-col gap-4;
  &--title {
    @apply flex items-center gap-3;
    &--name {
      @apply text-xl;
      font-family: Fira Code;
      @apply font-bold;
      @apply uppercase;
      @apply tracking-wider;
      @apply text-fuscous-gray-700;
    }
    &--icon {
      @apply w-[40px] h-[35px];
      @apply flex items-center justify-center;
      @apply text-4xl;
      @apply pt-[5px];
    }
  }
}
</style>
