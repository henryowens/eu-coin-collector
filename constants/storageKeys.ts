const STORAGE_PREFIX = "EU_CC_";

const makeStorageKey = (key: string) => `${STORAGE_PREFIX}${key}`;

export const SELECTED_COINS = makeStorageKey("SELECTED_COINS");
export const SELECTED_COUNTRIES = makeStorageKey("SELECTED_COUNTRIES");
