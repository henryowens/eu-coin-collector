import { describe, expect, it } from "vitest";

import Email from "../Email.vue";

describe("AuthContentEmail", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Email);

    expect(wrapper.vm).toBeTruthy();
  });
});
