import { describe, expect, it } from "vitest";

import Dialog from "../Dialog.vue";

describe("CookieConsentDialog", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Dialog);

    expect(wrapper.vm).toBeTruthy();
  });
});
