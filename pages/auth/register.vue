<script setup lang="ts">
import registerForm from "~/constants/forms/register";

const registerFormConfig = useFormConfig(registerForm);
</script>

<template>
  <FormPage v-bind="registerFormConfig">
    <template #links>
      <NuxtLink
        to="/auth/login"
        class="text-blue-400 transition-all hover:text-blue-500"
      >
        Already have an account? Login
      </NuxtLink>
    </template>
  </FormPage>
</template>
