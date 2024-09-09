<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";

import queries from "~/queries";

const { selectedCoins } = useSelectedCoins();

const onClear = () => (selectedCoins.value = []);

const { isLoggedIn, userDetails } = useAuth();
const filterSelectedCountries = useFilterSelectedCountries();
const {
  data: countries,
  suspense: suspenseCountries,
  isFetching: isCountriesFetching,
} = useCountries();

const onCountryClicked = (id: number) => {
  const index = filterSelectedCountries.value.findIndex(
    (selectedId) => selectedId === id,
  );

  if (index === -1) filterSelectedCountries.value.push(id);
  else filterSelectedCountries.value.splice(index, 1);
};

const filterSelectedCoins = useFilterSelectedCoins();
const {
  data: coins,
  suspense: suspenseCoins,
  isFetching: isCoinsFetching,
} = useCoins();
const onCoinClicked = (id: number) => {
  const index = filterSelectedCoins.value.findIndex(
    (selectedId) => selectedId === id,
  );

  if (index === -1) filterSelectedCoins.value.push(id);
  else filterSelectedCoins.value.splice(index, 1);
};
</script>

<template>
  <BaseDialog name="filters">
    <template #header>
      <h2 class="heading__lg">Filters</h2>
    </template>
    <template #body>
      <div class="flex flex-col gap-2">
        <FilterSection
          icon="ion:earth-outline"
          title="Countries"
          :show-clear-button="filterSelectedCountries.length > 0"
          :is-loading="isCountriesFetching"
          @clear="filterSelectedCountries = []"
        >
          <div class="filters--countries__content">
            <p
              v-for="({ flag, id }, index) in countries"
              :key="index"
              class="filters--countries__content--country"
              :class="
                filterSelectedCountries.includes(id)
                  ? 'bg-gray-300'
                  : 'bg-transparent'
              "
              @click="() => onCountryClicked(id)"
            >
              {{ flag }}
            </p>
          </div>
        </FilterSection>
        <FilterSection
          icon="ion:logo-euro"
          title="Coins"
          :show-clear-button="filterSelectedCoins.length > 0"
          :is-loading="isCoinsFetching"
          @clear="filterSelectedCoins = []"
        >
          <div class="filters--countries__content">
            <div
              v-for="({ image, value, name }, index) in coins"
              :key="index"
              class="filters--countries__content--coin"
              :class="
                filterSelectedCoins.includes(value)
                  ? 'bg-gray-300'
                  : 'bg-transparent'
              "
              @click="() => onCoinClicked(value)"
            >
              <img
                :src="image"
                :alt="`Image of ${name} coin`"
              />
            </div>
          </div>
        </FilterSection>
      </div>
    </template>
    <template #footer>
      <button
        class="w-full btn__outline"
        popovertargetaction="hide"
      >
        Close
      </button>
      <button
        class="w-full"
        popovertargetaction="hide"
      >
        Apply
      </button>
    </template>
  </BaseDialog>

  <BaseDialog name="confirmReset">
    <template #header>
      <h2 class="heading__lg">Confirm Reset</h2>
    </template>
    <template #body>
      <p class="text-sm text-gray-600">
        Warning this action will reset all your progress & is not revertable
      </p>
    </template>
    <template #footer>
      <div class="flex flex-col gap-3">
        <button
          class="btn__outline"
          popovertarget="confirmReset"
          popovertargetaction="hide"
        >
          Cancel
        </button>
        <button
          class="btn__danger"
          popovertarget="confirmReset"
          popovertargetaction="hide"
        >
          Delete
        </button>
      </div>
    </template>
  </BaseDialog>
  <div class="default__layout">
    <header>
      <div>
        <NuxtLink
          class="flex gap-2 items-center"
          to="/"
        >
          <Icon
            class="my-1"
            name="circle-flags:eu"
            size="25"
          />
          <h1 class="flex-1">EU Coin Collector</h1>
        </NuxtLink>
      </div>
      <div
        v-if="isLoggedIn && userDetails"
        class="flex"
      >
        <div class="flex gap-1 items-end text-sm">
          Welcome Back,
          <p class="text-ellipsis overflow-hidden max-w-[150px] text-gray-300">
            {{ userDetails.signInDetails?.loginId }}
          </p>
        </div>
        <p class="mr-3">|</p>
        <button
          class="bg-transparent border-none p-0 font-normal text-sm text-gray-300 hover:text-white transition-all hover:bg-transparent"
        >
          Logout
        </button>
      </div>
      <div
        v-else
        class="flex justify-end gap-1 text-sm text-gray-300"
      >
        <NuxtLink
          class="hover:text-gray-100 transition-all"
          to="/auth/login"
        >
          <Icon
            name="ion:person-circle-outline"
            size="25"
          />
        </NuxtLink>
      </div>
      <!-- <div class="btns__conatiner">
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
      </div> -->
    </header>
    <nav class="bg-gray-600 text-gray-300 flex justify-center p-2 px-4">
      <div class="text-xs uppercase flex gap-3">
        <NuxtLink to="/">My Collection</NuxtLink>
        <!-- <NuxtLink to="/faqs">FAQs</NuxtLink> -->
      </div>
    </nav>
    <main>
      <slot />
    </main>
  </div>
  <footer>
    <!-- <div class="pl-8">
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <Icon
          class="my-1"
          name="circle-flags:eu"
          size="20"
        />
        <h1 class="text-xs font-bold uppercase text-gray-300">
          EU Coin Collector
        </h1>
      </NuxtLink>
    </div> -->

    <div class="flex gap-4 items-start">
      <div class="footer--sitemap">
        <p class="section--title">Sitemap</p>
        <div class="footer--sitemap--content">
          <div class="footer--sitemap--content--section">
            <NuxtLink to="/auth/login">Login</NuxtLink>
            <NuxtLink to="/auth/register">Create Account</NuxtLink>
            <NuxtLink to="/auth/forgot-password">Forgot Password</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.default__layout {
  @apply flex flex-col min-h-screen;
}

header {
  @apply flex justify-between items-center;
  @apply p-2 px-4;
  @apply bg-gray-800 text-white;

  .btns__conatiner {
    @apply flex;
    @apply justify-end;
  }
  h1 {
    @apply text-sm;
    @apply tracking-wider;
    @apply uppercase;
    @apply text-left;
    @apply opacity-75;
  }
}

main {
  @apply p-4;
  @apply flex-1;
  @apply flex;
  @apply flex-col;
  @apply justify-center;
}

.router-link-exact-active {
  @apply text-white;
}

footer {
  @apply p-4;
  @apply bg-gray-800 text-white;
  @apply flex justify-between;
}

.section {
  &--title {
    @apply uppercase text-sm tracking-wide text-gray-400;
  }
  a {
    @apply text-blue-400 underline hover:text-blue-200 transition-all;
  }
}

.footer--sitemap {
  @apply flex flex-col gap-2 items-center;
  &--content {
    @apply flex gap-3 items-start;
    &--section {
      @apply flex-1 flex flex-col gap-1;
      @apply max-w-5xl w-full;
      &--title {
        @apply uppercase text-xs tracking-wide text-gray-300;
      }
      a {
        @apply text-gray-400 hover:text-gray-200 transition-all text-xs;
      }
    }
  }
}

.filters {
  &--countries__content {
    @apply flex;
    @apply gap-1;
    @apply flex-wrap;
    @apply sm:justify-center justify-around;
    &--country {
      @apply text-6xl sm:text-4xl;
      @apply text-black;
      @apply cursor-pointer;
      @apply px-2;
      @apply rounded-sm;
      @apply transition-all;
      &:hover {
        @apply bg-gray-300;
        @apply transition-all;
      }
    }
    &--coin {
      @apply cursor-pointer;
      @apply p-2;
      @apply rounded-sm;
      @apply transition-all;
      img {
        @apply w-12 h-12;
        @apply rounded-full;
      }
      &:hover {
        @apply bg-gray-300;
        @apply transition-all;
      }
    }
  }
}
</style>
