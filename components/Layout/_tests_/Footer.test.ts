import { describe, expect, it } from "vitest";

import Footer from "../Footer.vue";

describe("LayoutFooter", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Footer);

    expect(wrapper.vm).toBeTruthy();
  });
});
