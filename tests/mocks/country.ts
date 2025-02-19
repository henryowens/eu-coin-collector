import type { Database } from "~/types/database.types";

export const mockCountry: Database["public"]["Tables"]["countries"]["Row"] = {
  background_color: "rgb(255, 255, 255)",
  flag: "🇳🇱",
  id: "123456",
  locale: "nl",
  name: "Netherlands",
  normalised_name: "netherlands",
  slug: "netherlands",
  text_color: "light",
};
