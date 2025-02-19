import { describe, expect, it } from "vitest";

import Pin from "../Pin.vue";

describe("AuthContentPin", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Pin);

    expect(wrapper.vm).toBeTruthy();
  });
});
