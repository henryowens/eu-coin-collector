<script setup lang="ts" generic="T extends FieldModel">
import type { UnwrapRef } from "vue";

import type { FieldConfig, FieldModel } from "./types";

const model = defineModel<T>();
const props = defineProps<{ fields: FieldConfig<T>; submitText: string }>();
const fields = computed(() => props.fields);
const emit = defineEmits<{
  (e: "submit", values: T | UnwrapRef<T>): void;
}>();
const fieldKeys = useKeys(fields.value);

const handleSubmit = () => {
  if (model.value) emit("submit", model.value);
};
</script>

<template>
  <form
    v-if="model"
    @submit.prevent="handleSubmit"
  >
    <span
      v-for="key in fieldKeys"
      :key="key"
    >
      <label :for="key.toString()">
        {{ fields[key].label }}
      </label>
      <input
        v-model="model[key as keyof T]"
        :name="key.toString"
        :type="fields[key].type"
        :placeholder="fields[key].placeholder"
        :required="fields[key].required"
      />
    </span>

    <button type="submit">{{ submitText }}</button>
  </form>
</template>

<style scoped lang="scss">
form {
  @apply flex flex-col gap-6;
  span {
    @apply flex flex-col gap-1;
    label {
      @apply text-xs;
      @apply text-gray-400 font-bold uppercase tracking-wide;
    }
    input {
      @apply border border-gray-300 rounded px-3 py-2 text-sm;
    }
  }
}
</style>
