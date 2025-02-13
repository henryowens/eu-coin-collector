<template>
  <Transition
    name="slide"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>

<style lang="postcss" scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 0.3s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}
</style>
