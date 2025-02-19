import { describe, expect, it } from "vitest";

import SlideBetween from "../SlideBetween.vue";

describe("TransitionSlideBetween", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(SlideBetween);

    expect(wrapper.vm).toBeTruthy();
  });
});
