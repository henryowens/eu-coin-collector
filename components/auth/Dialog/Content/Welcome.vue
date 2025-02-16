<script setup lang="ts">
defineEmits<{
  (e: "next"): void;
}>();
</script>

<template>
  <div
    class="flex flex-col justify-between h-full gap-y-4"
    @click="$emit('next')"
  >
    <DialogHeader>
      <DialogTitle>Start Collecting Today</DialogTitle>
      <DialogDescription>
        To log into your account in 2 simple steps.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button
        class="w-full"
        type="submit"
        size="lg"
      >
        Get Started
      </Button>
    </DialogFooter>
  </div>
</template>
