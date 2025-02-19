import type { FullCoinset } from "~/queries/countries";

export const mockFullCoinset: FullCoinset = {
  id: "123456",
  title: "Example Coinset",
  coins: [
    {
      id: "123456",
      base_coin: {
        id: "123456",
        image: "https://example.com/image.png",
        name: "1 Euro",
        value: 1,
      },
      base_coin_id: "123456",
      coin_set_id: "123456",
      image: "https://example.com/image.png",
    },
    {
      id: "123456",
      base_coin: {
        id: "123456",
        image: "https://example.com/image.png",
        name: "2 Euro",
        value: 2,
      },
      base_coin_id: "123456",
      coin_set_id: "123456",
      image: "https://example.com/image.png",
    },
  ],
  country_id: "123456",
  priority: 1,
};
