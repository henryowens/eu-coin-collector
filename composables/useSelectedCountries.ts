import { useStorage } from "@vueuse/core";

import * as storageKeys from "~/constants/storageKeys";
import type { SelectedCountries } from "~/models/countries";

export default () =>
  useStorage<SelectedCountries>(storageKeys.SELECTED_COUNTRIES, []);
