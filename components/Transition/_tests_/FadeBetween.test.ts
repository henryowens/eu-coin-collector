import { describe, expect, it } from "vitest";

import FadeBetween from "../FadeBetween.vue";

describe("TransitionFadeBetween", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(FadeBetween);

    expect(wrapper.vm).toBeTruthy();
  });
});
