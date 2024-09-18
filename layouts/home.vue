<template>
  <div class="default__layout">
    <header>
      <div class="max-content-width">
        <NuxtLink
          class="default__layout--logo"
          aria-label="Link to homepage"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L12.6393 1.96406H14.6958L13.0244 3.1733L13.6637 5.14506L11.9923 3.92811L10.3209 5.14506L10.9602 3.1733L9.28883 1.96406H11.353L12 0ZM3.5122 3.5122L5.36072 4.45186L6.81643 2.98845L6.49294 5.02953L8.33376 5.96919L6.29268 6.29268L5.96919 8.33376L5.02953 6.48524L2.98845 6.81643L4.45186 5.35302L3.5122 3.5122ZM0 12L1.96406 11.3607V9.30424L3.1733 10.9756L5.14506 10.3363L3.92811 12.0077L5.14506 13.6791L3.1733 13.0398L1.96406 14.7112V12.647L0 12ZM3.5122 20.4878L4.45186 18.6393L2.98845 17.1836L5.02953 17.5071L5.96919 15.6662L6.29268 17.7073L8.33376 18.0308L6.48524 18.9705L6.81643 21.0116L5.35302 19.5481L3.5122 20.4878ZM12 24L11.3607 22.0359H9.30424L10.9756 20.8267L10.3363 18.8549L12.0077 20.0719L13.6791 18.8549L13.0398 20.8267L14.7112 22.0359H12.647L12 24ZM20.4878 20.4878L18.6393 19.5481L17.1836 21.0116L17.5071 18.9705L15.6662 18.0308L17.7073 17.7073L18.0308 15.6662L18.9705 17.5148L21.0116 17.1836L19.5481 18.647L20.4878 20.4878ZM24 12L22.0359 12.6393V14.6958L20.8267 13.0244L18.8549 13.6637L20.0719 11.9923L18.8549 10.3209L20.8267 10.9602L22.0359 9.28883V11.353L24 12ZM20.4878 3.5122L19.5481 5.36072L21.0116 6.81643L18.9705 6.49294L18.0308 8.33376L17.7073 6.29268L15.6662 5.96919L17.5148 5.02953L17.1836 2.98845L18.647 4.45186L20.4878 3.5122Z"
              fill="#FFDA44"
            />
          </svg>
          <span>Eu Coin Collector</span>
        </NuxtLink>
      </div>
    </header>
    <nav>
      <div class="max-content-width">
        <NuxtLink to="/">My Collection</NuxtLink>
      </div>
    </nav>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.default__layout {
  header {
    @apply bg-right-blue-900;
    @apply p-2.5;
  }

  &--logo {
    @apply uppercase;
    @apply flex items-center;
    @apply gap-2.5;
    @apply text-white;
    @apply text-base;
  }

  nav {
    @apply py-1.5 px-2.5;
    @apply bg-woodsmoke-950;
    div {
      @apply flex items-center justify-end;
      @apply gap-3.5;
      @apply text-xs;
      @apply text-white;
    }
  }
}
</style>
