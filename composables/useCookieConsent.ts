import { useStorage } from "@vueuse/core";

import * as storageKeys from "~/constants/storageKeys";

export default () => {
  const cookieConsent = useStorage<boolean>(storageKeys.COOKIE_CONSENT, null);
  const completedCookieConsent = useStorage<boolean>(
    storageKeys.COMPLETED_COOKIE_CONSENT,
    null,
  );

  return {
    cookieConsent,
    completedCookieConsent,
  };
};
