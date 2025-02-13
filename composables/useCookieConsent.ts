import { useLocalStorage } from "@vueuse/core";

import * as storageKeys from "~/constants/storageKeys";

export default () => {
  const cookieConsent = useLocalStorage<boolean>(
    storageKeys.COOKIE_CONSENT,
    null,
  );
  const completedCookieConsent = useLocalStorage<boolean>(
    storageKeys.COMPLETED_COOKIE_CONSENT,
    null,
  );

  return {
    cookieConsent,
    completedCookieConsent,
  };
};
