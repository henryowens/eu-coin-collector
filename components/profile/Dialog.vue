<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const user = useSupabaseUser();

const email = ref(user.value?.email);
</script>

<template>
  <Dialog>
    <DialogTrigger class="px-2 py-1">
      <Icon
        name="ion:person-sharp"
        size="16px"
      />
    </DialogTrigger>
    <DialogContent
      v-if="user"
      class="dialog__content"
    >
      <DialogHeader>
        <DialogTitle>Your Account</DialogTitle>
        <DialogDescription>An overview of your profile.</DialogDescription>
      </DialogHeader>

      <div class="flex gap-4w">
        <p
          v-if="user.last_sign_in_at"
          class="flex flex-col flex-1 text-slate-500"
        >
          Last Logged In:
          <span class="text-slate-900 font-bold">
            {{ new Date(user.created_at).toLocaleDateString() }} at
            {{ new Date(user.last_sign_in_at).toLocaleTimeString() }}
          </span>
        </p>
        <p
          v-if="user.created_at"
          class="flex flex-col flex-1 text-slate-500"
        >
          Member Since:
          <span class="text-slate-900 font-bold">
            {{ new Date(user.created_at).toLocaleDateString() }}
          </span>
        </p>
      </div>
      <hr />
      <div class="flex flex-col gap-y-3">
        <h2>Account Information</h2>
        <div class="w-full">
          <label
            class="text-sm text-slate-500"
            for="email"
          >
            Email:
          </label>
          <div class="flex items-center justify-between gap-4">
            <Input
              v-model="email"
              :disabled="true"
              type="email"
              class="mt-1"
              name="email"
              placeholder="example@gmail.com"
            />
            <Icon
              name="ion:checkmark-circle"
              size="22px"
              class="text-green-500"
            />
          </div>
        </div>

        <!-- <div>
          <label
            class="text-sm text-slate-500"
            for="phone"
          >
            Phone:
          </label>
          <Input
            v-model="phone"
            :disabled="isUserUpdating"
            type="tel"
            name="phone"
            class="mt-1"
            placeholder="+44 4 43532 333"
          />
        </div> -->
        <!-- 
        <p
          v-if="error"
          class="text-red-600 text-sm mt-2"
        >
          {{ error }}
        </p>
        <p
          v-else-if="isSuccess"
          class="text-green-600 text-sm mt-2"
        >
          Your account has been updated successfully
        </p> -->

        <!-- <Button
          size="lg"
          type="submit"
          :disabled="isUserUpdating"
        >
          Update
        </Button> -->
      </div>
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
