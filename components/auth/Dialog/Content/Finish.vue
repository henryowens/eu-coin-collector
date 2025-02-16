<script setup lang="ts">
defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div class="flex-1 flex flex-col gap-y-4">
    <DialogHeader>
      <DialogTitle>All Set!</DialogTitle>
      <DialogDescription>
        Continue to start your collection now.
      </DialogDescription>
    </DialogHeader>
    <div class="flex flex-col h-full gap-y-4">
      <div class="flex-1 flex items-center justify-center pb-16">
        <Icon
          name="ion:checkmark-circled"
          size="150px"
          class="text-green-600"
        />
      </div>

      <DialogFooter>
        <Button
          class="w-full"
          size="lg"
          @click="$emit('close')"
        >
          Continue
        </Button>
      </DialogFooter>
    </div>
  </div>
</template>
