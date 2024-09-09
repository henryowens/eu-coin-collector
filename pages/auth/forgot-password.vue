<script setup lang="ts">
import forgotPasswordForm from "~/constants/forms/forgotPassword";

const forgotPasswordConfig = useFormConfig(forgotPasswordForm);
</script>

<template>
  <FormPage v-bind="forgotPasswordConfig">
    <template #links>
      <NuxtLink
        to="/auth/login"
        class="btn__outline button"
      >
        Back to Login
      </NuxtLink>
    </template>
  </FormPage>
</template>
