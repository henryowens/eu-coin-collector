<script setup lang="ts">
import { useIntervalFn, useMouse, useWindowScroll } from "@vueuse/core";

const { data: countries } = useCountries();

const countriesRef = ref();

const { y: windowY } = useWindowScroll();
const { y: mouseY } = useMouse();

const percentScrolledFromTop = computed(() => {
  return (
    (windowY.value /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100
  );
});

const { resume, pause } = useIntervalFn(() => {
  windowY.value =
    (mouseY.value / window.innerHeight) * document.documentElement.scrollHeight;
}, 0);

const onClickDown = resume;
const onClickUp = pause;
</script>

<template>
  {{ percentScrolledFromTop }}
  <div
    v-if="countries"
    ref="countriesRef"
    class="fixed left-0 top-0 h-dvh flex items-center justify-center px-8 pt-8"
    @mousedown="onClickDown"
    @mouseup="onClickUp"
  >
    <div class="rounded-xl bg-fuscous-gray-100 relative">
      <div
        v-for="(country, index) in countries"
        :key="index"
        class="p-2"
      >
        <span
          class="text-2xl h-[20px] flex items-center justify-center pt-[2px]"
        >
          {{ country.flag }}
        </span>
      </div>

      <div
        class="absolute bg-fuscous-gray-950 opacity-50 w-[40px] h-[38px] rounded-xl left-0 z-20"
        :style="{ top: `${percentScrolledFromTop}%` }"
      />
    </div>
  </div>
</template>
