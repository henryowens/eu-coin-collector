<script setup lang="ts">
import { useMutation } from "@tanstack/vue-query";

import DialogFooter from "~/components/ui/dialog/DialogFooter.vue";
import PinInput from "~/components/ui/pin-input/PinInput.vue";
import PinInputGroup from "~/components/ui/pin-input/PinInputGroup.vue";
import PinInputInput from "~/components/ui/pin-input/PinInputInput.vue";

const props = defineProps<{
  email: string;
}>();

const pinCode = ref<string[]>();
const supabase = useSupabaseClient();
const { mutateAsync: verifyOtp, isPending: isCodeSubmitting } = useMutation({
  mutationFn: (token: string) =>
    supabase.auth.verifyOtp({
      email: props.email,
      token,
      type: "email",
    }),
});

const handlePinComplete = async () => {
  const formattedPin = pinCode.value?.join("");
  if (!formattedPin?.length) return;

  const { error } = await verifyOtp(formattedPin);
  await supabase.auth.refreshSession();

  if (error) {
    console.error("Error sending OTP:", error);
  }
};
</script>

<template>
  <div class="flex flex-col h-full gap-y-4">
    <div class="flex-1">
      <p class="mb-8">Pin code sent to: {{ email }}</p>
      <PinInput
        id="pin-input"
        v-model="pinCode"
        placeholder="○"
        class="justify-center mt-1"
        name="pin"
        @complete="handlePinComplete"
      >
        <PinInputGroup>
          <PinInputInput
            v-for="(id, index) in 6"
            :key="id"
            :index="index"
          />
        </PinInputGroup>
      </PinInput>
    </div>

    <DialogFooter>
      <Button
        :disabled="isCodeSubmitting"
        @click="handlePinComplete"
      >
        Login
      </Button>
    </DialogFooter>
  </div>
</template>
