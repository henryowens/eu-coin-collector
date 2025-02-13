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

const isOpen = defineModel<boolean>({
  default: false,
});

defineProps<{
  hasTrigger?: boolean;
}>();

const user = useSupabaseUser();
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger v-if="hasTrigger">
      <slot />
    </DialogTrigger>
    <DialogContent class="dialog__content">
      <TransitionSlideBetween class="flex-1 flex">
        <div
          v-if="user"
          class="flex-1 flex flex-col gap-y-4"
        >
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
                @click="() => (isOpen = false)"
              >
                Continue
              </Button>
            </DialogFooter>
          </div>
        </div>
        <div
          v-else
          class="flex-1 flex flex-col gap-y-4"
        >
          <DialogHeader>
            <DialogTitle>Start Collecting Today</DialogTitle>
            <DialogDescription>
              To log in simply enter your email and you will recive a
              confirmation code.
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
              @change-email="() => (email = undefined)"
            />
          </TransitionFadeBetween>
        </div>
      </TransitionSlideBetween>
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
