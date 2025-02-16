<script setup lang="ts">
defineEmits<{
  (e: "next"): void;
}>();
</script>

<template>
  <div class="flex flex-col justify-between h-full gap-y-4">
    <DialogHeader>
      <DialogTitle>Start Collecting Today</DialogTitle>
      <DialogDescription>
        To log into your account in 2 simple steps.
      </DialogDescription>
    </DialogHeader>

    <div>
      <div class="flex gap-x-6">
        <div
          class="flex items-center justify-center w-14 h-14 bg-masala-950 rounded-full"
        >
          <Icon
            name="ion:email"
            size="30"
            class="text-masala-100"
          />
        </div>
        <div>
          <h2 class="text-masala-950 font-bold">Step 1: Email</h2>
          <p class="text-masala-400">Simply enter your email address.</p>
        </div>
      </div>

      <div class="h-24 bg-masala-950 px-1 w-0 ml-6" />

      <div class="flex gap-x-6">
        <div
          class="flex items-center justify-center w-14 h-14 bg-masala-950 rounded-full"
        >
          <Icon
            name="ion:apps-outline"
            size="24"
            class="text-masala-100"
          />
        </div>
        <div class="flex flex-col flex-1">
          <h2 class="text-masala-950 font-bold">Step 2: Pin</h2>
          <p class="text-masala-400">
            You will revice a pin to your email address to confirm your login.
          </p>
        </div>
      </div>
    </div>

    <DialogFooter>
      <Button
        class="w-full"
        type="submit"
        size="lg"
        @click="$emit('next')"
      >
        Get Started
      </Button>
    </DialogFooter>
  </div>
</template>
