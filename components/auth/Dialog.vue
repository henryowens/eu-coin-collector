<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const email = ref<string>();
</script>

<template>
  <Dialog>
    <DialogTrigger>Login</DialogTrigger>
    <DialogContent class="dialog__content">
      <DialogHeader>
        <DialogTitle>Login</DialogTitle>
        <DialogDescription>
          To log in simply enter your email and you will recive a confirmation
          code.
        </DialogDescription>
      </DialogHeader>

      <TransitionFadeBetween class="flex-1">
        <AuthDialogContentEmail
          v-if="!email"
          @email-submitted="(newEmail) => (email = newEmail)"
        />
        <AuthDialogContentPin
          v-else
          :email="email"
        />
      </TransitionFadeBetween>
    </DialogContent>
  </Dialog>
</template>

<style lang="scss">
.dialog__content {
  @apply sm:max-w-[500px] sm:max-h-[600px] w-full h-full flex flex-col;
  row-gap: 2rem /* 32px */ !important;

  > button:last-child {
    background: transparent !important;
    @apply text-black;
    @apply p-0 absolute top-3 right-3;
  }
}
</style>
