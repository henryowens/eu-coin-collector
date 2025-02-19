import { describe, expect, it } from "vitest";

import { mockFullCoinset } from "~/tests/mocks/coinset";
import { mockCountry } from "~/tests/mocks/country";

import CoinSet from "../CoinSet.vue";

describe("CoinSet", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(CoinSet, {
      props: {
        country: mockCountry,
        set: mockFullCoinset,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
