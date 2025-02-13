<template>
  <Transition
    name="fade"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
