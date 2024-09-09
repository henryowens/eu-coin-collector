// type FieldType<T> = T extends string
//   ? "text" | "email"
//   : T extends number
//     ? "number"
//     : "unknown";

import type { FieldModel } from "~/components/form/types";

// type FieldConfig<V, N extends string> = {
//   name: N;
//   initialValue: V;
//   type: FieldType<V>;
// };

// const useFields = <T extends FieldConfig<any, string>[]>(
//   configs: [...T],
// ): { [K in T[number] as K["name"]]: K["initialValue"] } => {
//   return configs.reduce(
//     (acc, config) => {
//       acc[config.name as T[number]["name"]] = config.initialValue;

//       return acc;
//     },
//     {} as { [K in T[number] as K["name"]]: K["initialValue"] },
//   );
// };

// // Examples of valid configurations
// const fields = useFields([
//   { name: "username", initialValue: "", type: "text" }, // Valid
//   { name: "email", initialValue: "", type: "email" }, // Valid
//   { name: "age", initialValue: 30, type: "number" }, // Valid
//   // The following would cause a TypeScript error
//   // { name: "username", initialValue: "", type: "number" }, // Error: Type '"number"' is not assignable to type '"text" | "email"'
//   // { name: "age", initialValue: 30, type: "text" }, // Error: Type '"text"' is not assignable to type '"number"'
// ]);

// console.log(fields);

const useFields = <T extends FieldModel>(config: T) => {
  return config;
};

const fields = useFields<{
  email: string;
  password: number;
  password2: number;
}>({
  email: "",
  password: 3,
  password2: 3,
});

// Now, `fields.email` is inferred as `string` and `fields.password` is inferred as `number`.
