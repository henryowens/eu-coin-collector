<script setup lang="ts" generic="T extends FieldModel">
import type { FieldConfig, FieldModel, FormPageProps } from "./types";

const props = defineProps<FormPageProps<T>>();
defineSlots<{
  links: void;
}>();

const initalValues = computed(() => props.initalValues);

const formData = ref<T>(initalValues.value);

const onSubmit = () => {
  if (!formData.value) return;
  props.callback(formData.value);
};
</script>

<template>
  <div class="form__page">
    <h1>{{ title }}</h1>
    <Form
      v-model="formData"
      :submit-text="submitLabel"
      :fields="fields as FieldConfig<T>"
      @submit="onSubmit"
    />
    <div class="form__page--links">
      <slot name="links" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form__page {
  @apply max-w-xs w-full;
  @apply px-2;
  @apply m-auto;
  @apply pb-[52px];
  h1 {
    @apply text-2xl;
    @apply tracking-wider;
    @apply mb-6;
  }
  .form__page--links {
    @apply mt-4;
    @apply flex flex-col gap-4;
  }
}
</style>
