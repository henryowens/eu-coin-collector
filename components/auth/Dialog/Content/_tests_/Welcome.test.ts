import { describe, expect, it } from "vitest";

import Welcome from "../Welcome.vue";

describe("AuthContentWelcome", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Welcome, {});

    console.log(wrapper.html());

    expect(wrapper.vm).toBeTruthy();
  });
});
