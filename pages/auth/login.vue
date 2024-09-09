<script setup lang="ts">
import loginForm from "~/constants/forms/login";

const loginFormConfig = useFormConfig(loginForm);
</script>

<template>
  <FormPage v-bind="loginFormConfig">
    <template #links>
      <NuxtLink
        to="/auth/register"
        class="btn__outline button"
      >
        Create an account
      </NuxtLink>

      <NuxtLink
        to="/auth/forgot-password"
        class="text-blue-400 transition-all hover:text-blue-500"
      >
        Forgot Password
      </NuxtLink>
    </template>
  </FormPage>
</template>
