import { config } from "@vue/test-utils";
import { vi } from "vitest";

vi.mock("radix-vue", async () => {
  const actual = await vi.importActual<typeof import("radix-vue")>("radix-vue");

  Object.keys(actual).forEach((key) => {
    if (key in actual) {
      const imp = actual[key];

      if ("__name" in imp && typeof imp.__name === "string") {
        config.global.stubs[imp.__name] = {
          template: `<span data-test="radix-vue-${imp.__name}" />`,
        };
      }
    }
  });

  return actual;
});
