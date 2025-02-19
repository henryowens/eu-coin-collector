import { describe, expect, it } from "vitest";

import NavigationMenu from "../NavigationMenu.vue";

describe("LayoutNavigationMenu", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(NavigationMenu);

    expect(wrapper.vm).toBeTruthy();
  });
});
