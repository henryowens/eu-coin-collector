<script setup lang="ts">
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const email = ref<string>();

const isOpen = defineModel<boolean>({
  default: false,
});

defineProps<{
  hasTrigger?: boolean;
}>();

const user = useSupabaseUser();

const userHasSeenIntro = ref(false);

const progress = computed(() => {
  if (user.value) return 100;
  else if (!userHasSeenIntro.value) return 0;
  else if (!email.value) return 33;
  else if (!!email.value.length && !user.value) return 66;
});
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger v-if="hasTrigger">
      <slot />
    </DialogTrigger>
    <DialogContent class="dialog__content pb-0 px-0 gap-0">
      <div class="flex-1 flex flex-col px-6">
        <TransitionSlideBetween class="flex-1 flex">
          <AuthDialogContentFinish
            v-if="user"
            @close="() => (isOpen = false)"
          />
          <AuthDialogContentWelcome
            v-else-if="!userHasSeenIntro"
            @next="() => (userHasSeenIntro = true)"
          />
          <AuthDialogContentEmail
            v-else-if="!email"
            @email-submitted="(newEmail) => (email = newEmail)"
          />
          <AuthDialogContentPin
            v-else
            :email="email"
            @change-email="() => (email = undefined)"
          />
        </TransitionSlideBetween>
      </div>

      <Progress v-model="progress" />
    </DialogContent>
  </Dialog>
</template>

<style lang="scss">
.dialog__content {
  @apply rounded-xl border-0 overflow-x-hidden  sm:max-w-[500px] sm:max-h-[600px] w-full h-full flex flex-col;
  row-gap: 2rem /* 32px */ !important;

  > button:last-child {
    background: transparent !important;
    @apply text-black;
    @apply p-0 absolute top-3 right-3;
  }
}
</style>
