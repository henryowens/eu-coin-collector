import type { Countries } from "~/models/countries";

export default (countries: Countries) => {
  const templateRefs = reactive<Record<string, HTMLElement | null>>(
    countries
      .map((country) => ({
        [country.normalizedName]: null,
      }))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {}),
  );

  return [templateRefs];
};
