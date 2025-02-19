import { describe, expect, it } from "vitest";

import Finish from "../Finish.vue";

describe("AuthContentFinish", () => {
  it("should render component", async () => {
    const wrapper = await mountSuspended(Finish);

    expect(wrapper.vm).toBeTruthy();
  });
});
