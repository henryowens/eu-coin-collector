import type { FieldModel, FormPageProps } from "~/components/form/types";

export const wrapFormConfig =
  <T extends FieldModel>(
    callback: (auth: ReturnType<typeof useAuth>) => FormPageProps<T>,
  ) =>
  (auth: ReturnType<typeof useAuth>) =>
    callback(auth);

export default <T extends FieldModel>(
  callback: ReturnType<typeof wrapFormConfig<T>>,
) => {
  const auth = useAuth();

  return callback(auth);
};
