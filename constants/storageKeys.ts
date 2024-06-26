const STORAGE_PREFIX = "EU_CC_";

const makeStorageKey = (key: string) => `${STORAGE_PREFIX}${key}`;

export const SELECTED_COINS = makeStorageKey("SELECTED_COINS");
export const FILTER_SELECTED_COUNTRIES = makeStorageKey(
  "FILTER_SELECTED_COUNTRIES",
);
export const FILTER_SELECTED_COINS = makeStorageKey("FILTER_SELECTED_COINS");
export const COOKIE_CONSENT = makeStorageKey("COOKIE_CONSENT");
export const COMPLETED_COOKIE_CONSENT = makeStorageKey(
  "COMPLETED_COOKIE_CONSENT",
);
