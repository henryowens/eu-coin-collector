<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";
import DialogFooter from "~/components/ui/dialog/DialogFooter.vue";
import Input from "~/components/ui/input/Input.vue";
import { useVerifyEmailMutation } from "~/queries/auth";

const emit = defineEmits<{
  (e: "email-submitted", email: string): void;
}>();
const email = ref<string>();

const {
  mutateAsync: signInWithOtp,
  isPending: isEmailSubmitting,
  error,
  isSuccess: isEmailSuccess,
} = useVerifyEmailMutation();

const handleEmailComplete = async () => {
  if (!email.value?.length) return;

  try {
    await signInWithOtp(email.value);

    emit("email-submitted", email.value);
  } catch (error) {}
};

const errorMessage = computed(() => error.value?.message);
</script>

<template>
  <div class="flex-1 flex flex-col gap-y-4">
    <DialogHeader>
      <DialogTitle>Your Email Address</DialogTitle>
      <DialogDescription>
        To log in simply enter your email and you will recive a confirmation
        code.
      </DialogDescription>
    </DialogHeader>

    <form
      class="flex flex-col h-full gap-y-4"
      @submit.prevent="handleEmailComplete"
    >
      <div class="flex-1">
        <label
          for="email"
          class="text-sm"
        >
          Email
        </label>
        <Input
          v-model="email"
          type="email"
          placeholder="example@gmail.com"
          :disabled="isEmailSubmitting || isEmailSuccess"
          name="email"
          class="mt-1"
        />
        <p
          v-if="errorMessage"
          class="text-red-600 text-sm mt-2"
        >
          {{ errorMessage }}
        </p>
      </div>

      <DialogFooter>
        <Button
          :disabled="isEmailSubmitting || isEmailSuccess"
          class="w-full"
          type="submit"
          size="lg"
        >
          Get Code
        </Button>
      </DialogFooter>
    </form>
  </div>
</template>
