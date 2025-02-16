import { mergeQueryKeys } from "@lukemorales/query-key-factory";

import auth from "./auth";
import coins from "./coins";
import countries from "./countries";
import selectedCoins from "./selectedCoins";

export default mergeQueryKeys(auth, countries, selectedCoins, coins);
