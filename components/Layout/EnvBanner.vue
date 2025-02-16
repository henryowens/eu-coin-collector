<script setup lang="ts">
const { isLocal, isAcceptance } = useAppEnv();
</script>

<template>
  <div
    v-if="isLocal || isAcceptance"
    class="env__banner"
    :class="{
      'bg-green-400': isLocal,
      'bg-orange-400': isAcceptance,
    }"
  >
    {{ isLocal ? "LOCAL" : "ACCEPTANCE" }} ENV
  </div>
</template>

<style lang="postcss" scoped>
.env__banner {
  @apply p-4;
  @apply flex items-center justify-center;
  @apply font-bold text-white tracking-wide;
}
</style>
