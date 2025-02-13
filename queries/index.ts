import { mergeQueryKeys } from "@lukemorales/query-key-factory";

import coins from "./coins";
import countries from "./countries";
import selectedCoins from "./selectedCoins";

export default mergeQueryKeys(countries, selectedCoins, coins);
