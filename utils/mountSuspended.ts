import { mountSuspended as _mountSuspended } from "@nuxt/test-utils/runtime";

export default <T>(...params: Parameters<typeof _mountSuspended<T>>) =>
  _mountSuspended<T>(...params);
