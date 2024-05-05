import { useStorage } from "@vueuse/core";

import * as storageKeys from "~/constants/storageKeys";
import type { SelectedCoins } from "~/models/coins";

export default () => useStorage<SelectedCoins>(storageKeys.SELECTED_COINS, []);
