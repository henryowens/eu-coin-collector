<script setup lang="ts">
const lines = [
  { rotate: 0 },
  { rotate: 30 },
  { rotate: 60 },
  { rotate: 90 },
  { rotate: 120 },
  { rotate: 150 },
  { rotate: 180 },
  { rotate: 210 },
  { rotate: 240 },
  { rotate: 270 },
  { rotate: 300 },
  { rotate: 330 },
];
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
  >
    <line
      v-for="({ rotate }, index) in lines"
      :key="index"
      x1="25"
      y1="25"
      x2="37"
      y2="25"
      :transform="`rotate(${rotate} 25 25) translate(11 0)`"
      :class="`line-${index}`"
    />
  </svg>
</template>

<style scoped lang="scss">
svg {
  margin: auto;

  width: 50px;
  height: 50px;
  /* border: 1px solid grey; */
}

line {
  stroke: #1f2937;
  stroke-width: 3;
  stroke-linecap: round;

  animation: fade 800ms linear infinite;
}

@keyframes fade {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.line-0 {
  animation-delay: -733ms;
}

.line-1 {
  animation-delay: -667ms;
}

.line-2 {
  animation-delay: -600ms;
}

.line-3 {
  animation-delay: -533ms;
}

.line-4 {
  animation-delay: -467ms;
}

.line-5 {
  animation-delay: -400ms;
}

.line-6 {
  animation-delay: -333ms;
}

.line-7 {
  animation-delay: -267ms;
}

.line-8 {
  animation-delay: -200ms;
}

.line-9 {
  animation-delay: -133ms;
}

.line-10 {
  animation-delay: -67ms;
}

.line-11 {
  animation-delay: 0ms;
}
</style>
