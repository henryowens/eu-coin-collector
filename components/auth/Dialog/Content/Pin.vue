<script setup lang="ts">
import DialogFooter from "~/components/ui/dialog/DialogFooter.vue";
import PinInput from "~/components/ui/pin-input/PinInput.vue";
import PinInputGroup from "~/components/ui/pin-input/PinInputGroup.vue";
import PinInputInput from "~/components/ui/pin-input/PinInputInput.vue";
import { useVerifyOtpMutation } from "~/queries/auth";

const props = defineProps<{
  email: string;
}>();

const emit = defineEmits<{
  (e: "change-email"): void;
}>();

const pinCode = ref<string[]>();
const supabase = useSupabaseClient();
const {
  mutateAsync: verifyOtp,
  isPending: isCodeSubmitting,
  error,
  isSuccess: isCodeSuccess,
} = useVerifyOtpMutation();
const handlePinComplete = async () => {
  const formattedPin = pinCode.value?.join("");
  if (!formattedPin?.length) return;

  await verifyOtp({
    otp: formattedPin,
    email: props.email,
  });
  await supabase.auth.refreshSession();
};

const onResendPin = async () => {};

const errorMessage = computed(() => error.value?.message);
</script>

<template>
  <div class="flex-1 flex flex-col gap-y-4">
    <DialogHeader>
      <DialogTitle>You've recived a Pin</DialogTitle>
      <DialogDescription>
        We have sent you a 6 digit pin code to your email address. Please enter
        it below.
      </DialogDescription>
    </DialogHeader>

    <form
      class="flex flex-col h-full gap-y-4"
      @submit.prevent="handlePinComplete"
    >
      <div class="flex-1">
        <span class="mb-8 flex items-center gap-2">
          <p>Pin code sent to: {{ email }}</p>
          <button
            class="p-0 bg-transparent text-accent-foreground hover:bg-transparent font-normal hover:font-bold transition-all underline"
            @click="emit('change-email')"
          >
            change
          </button>
        </span>
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
        <p
          v-if="errorMessage"
          class="text-red-600 text-sm mt-2"
        >
          {{ errorMessage }}
        </p>
      </div>

      <DialogFooter>
        <Button
          :disabled="isCodeSubmitting || isCodeSuccess"
          class="w-full text-accent-foreground"
          variant="outline"
          size="lg"
          @click="onResendPin"
        >
          Resend Pin
        </Button>
        <Button
          :disabled="isCodeSubmitting || isCodeSuccess"
          class="w-full"
          size="lg"
          type="submit"
        >
          Login
        </Button>
      </DialogFooter>
    </form>
  </div>
</template>
