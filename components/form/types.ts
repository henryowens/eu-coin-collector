import type { UnwrapRef } from "vue";

export type FieldConfig<T> = {
  [K in keyof T]: {
    label: string;
    required?: boolean;
    placeholder?: string;
    type?: T[K] extends string | undefined
      ? "text" | "email" | "password"
      : T[K] extends number | undefined
        ? "number"
        : T[K] extends boolean | undefined
          ? "checkbox"
          : never;
  };
};
export type FieldModel = {
  [key: string]: any;
};

export interface FormPageProps<T extends FieldModel> {
  title: string;
  submitLabel: string;
  initalValues: T;
  fields: FieldConfig<T>;
  callback: (data: T | UnwrapRef<T>) => void;
}
