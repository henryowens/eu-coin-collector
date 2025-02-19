import { describe, expect, it } from "vitest";

import Header from "../Header.vue";

describe("LayoutHeader", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Header);

    expect(wrapper.vm).toBeTruthy();
  });
});
