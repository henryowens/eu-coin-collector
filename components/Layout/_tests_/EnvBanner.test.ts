import { describe, expect, it } from "vitest";

import EnvBanner from "../EnvBanner.vue";

describe("LayoutEnvBanner", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(EnvBanner);

    expect(wrapper.vm).toBeTruthy();
  });
});
