<template>
  <div class="default__layout">
    <LayoutHeader />
    <LayoutNavigationMenu />
    <main class="min-h-dvh">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.default__layout {
  @apply flex flex-col min-h-screen bg-masala-50;
}
</style>
