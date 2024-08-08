<script setup lang="ts">
const { onBeforeRender } = useLoop();
const rotationY = ref(0);

onBeforeRender(() => {
  rotationY.value = Math.sin(Number(new Date()) * 0.002) * 2 * Math.PI;
});
</script>

<template>
  <GLTFModel path="/models/scene.gltf" />
</template>
