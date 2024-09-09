import { mergeQueryKeys } from "@lukemorales/query-key-factory";

import coins from "./coins";
import countries from "./countries";
import me from "./me";

export default mergeQueryKeys(countries, coins, me);
