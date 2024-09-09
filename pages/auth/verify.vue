<script setup lang="ts">
import verifyForm from "~/constants/forms/verify";

const verifyFormConfig = useFormConfig(verifyForm);
</script>

<template>
  <FormPage v-bind="verifyFormConfig">
    <template #links>
      <NuxtLink
        to="/auth/login"
        class="btn__outline button"
      >
        Back To Login
      </NuxtLink>
    </template>
  </FormPage>
</template>
