<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";

import Button from "~/components/ui/button/Button.vue";
import DialogFooter from "~/components/ui/dialog/DialogFooter.vue";
import Input from "~/components/ui/input/Input.vue";

const emit = defineEmits<{
  (e: "email-submitted", email: string): void;
}>();
const email = ref<string>();
const supabase = useSupabaseClient();

const { mutateAsync: signInWithOtp, isPending: isEmailSubmitting } =
  useMutation({
    mutationFn: (email: string) =>
      supabase.auth.signInWithOtp({
        email,
      }),
  });

const handleEmailComplete = async () => {
  if (!email.value?.length) return;

  const { error } = await signInWithOtp(email.value);

  if (error) {
    console.error("Error sending OTP:", error);

    return;
  }

  emit("email-submitted", email.value);
};
</script>

<template>
  <div class="flex flex-col h-full gap-y-4">
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
        name="email"
        class="mt-1"
      />
    </div>

    <DialogFooter>
      <Button
        :disabled="isEmailSubmitting"
        @click="handleEmailComplete"
      >
        Get Code
      </Button>
    </DialogFooter>
  </div>
</template>
