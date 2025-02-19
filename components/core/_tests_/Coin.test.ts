import { describe, expect, it } from "vitest";

import Coin from "../Coin.vue";

describe("Coin", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Coin);

    expect(wrapper.vm).toBeTruthy();
  });
});
