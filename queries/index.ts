import { mergeQueryKeys } from "@lukemorales/query-key-factory";

import coins from "./coins";
import countries from "./countries";

export default mergeQueryKeys(countries, coins);
