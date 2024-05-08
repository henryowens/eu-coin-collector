import { useStorage } from "@vueuse/core";

import * as storageKeys from "~/constants/storageKeys";
import type { FilterSelectedCountries } from "~/models/countries";

export default () =>
  useStorage<FilterSelectedCountries>(storageKeys.FILTER_SELECTED_COINS, []);
