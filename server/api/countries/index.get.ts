import type { CountriesResponse } from "~/models/api";

export default defineEventHandler(
  () =>
    [
      {
        id: 1,
        name: "Austria",
        locale: "at",
        flag: "🇦🇹",
        normalizedName: "austria",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
              },
              {
                value: 1,
                name: "1 Euro",
              },
              {
                value: 0.5,
                name: "50 cent",
              },
              {
                value: 0.2,
                name: "20 cent",
              },
              {
                value: 0.1,
                name: "10 cent",
              },
              {
                value: 0.05,
                name: "5 cent",
              },
              {
                value: 0.02,
                name: "2 cent",
              },
              {
                value: 0.01,
                name: "1 cent",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Belgium",
        locale: "be",
        flag: "🇧🇪",
        normalizedName: "belgium",
        colorScheme: {
          background: "#FECA00",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            title: "2014",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro-_0.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_0.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_0.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_0.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_0.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_0.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_0.png",
              },
            ],
          },
          {
            id: 2,
            title: "2008",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_1.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_0.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_1.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_1.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_1.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_1.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_1.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_1.png",
              },
            ],
          },
          {
            id: 3,
            title: "2002",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_2.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_1.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_2.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_2.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_2.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_2.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_2.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_2.png",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Cyprus",
        locale: "cy",
        flag: "🇨🇾",
        normalizedName: "cyprus",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_3.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_2.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_3.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_3.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_3.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_3.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_3.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_3.png",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Estonia",
        locale: "ee",
        flag: "🇪🇪",
        normalizedName: "estonia",
        colorScheme: {
          background: "#272727",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_4.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin1_euro.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_4.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_5.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_4.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_4.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_4.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_4.png",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Finland",
        locale: "fi",
        flag: "🇫🇮",
        normalizedName: "finland",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_5.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_3.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_5.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_6.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_5.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_5.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_5.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_5.png",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "France",
        locale: "fr",
        flag: "🇫🇷",
        normalizedName: "france",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_6.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_4.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_6.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_7.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_6.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_6.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_6.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_6.png",
              },
            ],
          },
        ],
      },
      {
        id: 7,
        name: "Germany",
        locale: "de",
        flag: "🇩🇪",
        normalizedName: "germany",
        colorScheme: {
          background: "#E31D1C",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_7.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_5.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_7.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_8.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_7.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_7.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_7.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_7.png",
              },
            ],
          },
        ],
      },
      {
        id: 8,
        name: "Greece",
        locale: "gr",
        flag: "🇬🇷",
        normalizedName: "greece",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_8.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_6.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_8.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_9.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_8.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_8.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_8.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_8.png",
              },
            ],
          },
        ],
      },
      {
        id: 9,
        name: "Ireland",
        locale: "ie",
        flag: "🇮🇪",
        normalizedName: "ireland",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_10.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_8.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_9.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_10.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_9.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_9.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_9.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_9.png",
              },
            ],
          },
        ],
      },
      {
        id: 10,
        name: "Italy",
        locale: "it",
        flag: "🇮🇹",
        normalizedName: "italy",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8563.jpg",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8471.jpg",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8498.jpg",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8521.jpg",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8536.jpg",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8481.jpg",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8519.jpg",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "http://ec.europa.eu/economy_finance/images/thumbnail100w_8575.jpg",
              },
            ],
          },
        ],
      },
      {
        id: 11,
        name: "Latvia",
        locale: "lv",
        flag: "🇱🇻",
        normalizedName: "latvia",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_11.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_9.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_10.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_11.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_10.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_10.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_10.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_10.png",
              },
            ],
          },
        ],
      },
      {
        id: 12,
        name: "Lithuania",
        locale: "lt",
        flag: "🇱🇹",
        normalizedName: "lithuania",
        colorScheme: {
          background: "#55BA07",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_2_euro_lt_1.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_1_euro_lt_0.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_50_cent_lt_0.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_20_cent_lt_0.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_10_cent_lt_0.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_5_cent_lt_2.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_2_cent_lt_2.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro-coin_1_cent_lt_0.png",
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "Luxembourg",
        locale: "lu",
        flag: "🇱🇺",
        normalizedName: "luxembourg",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_13.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_11.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_12.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_13.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_12.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_12.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_12.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_12.png",
              },
            ],
          },
        ],
      },
      {
        id: 14,
        name: "Malta",
        flag: "🇲🇹",
        locale: "mt",
        normalizedName: "malta",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_14.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_12.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_13.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_14.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_13.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_13.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_13.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_13.png",
              },
            ],
          },
        ],
      },
      {
        id: 15,
        name: "The Netherlands",
        locale: "nl",
        flag: "🇳🇱",
        normalizedName: "the-netherlands",
        colorScheme: {
          background: "#FFFFFF",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            title: "2014",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_15.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_13.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_14.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_16.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_14.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_14.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_14.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_14.png",
              },
            ],
          },
          {
            id: 2,
            title: "2002",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_16.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_14.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_15.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_17.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_15.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_15.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_15.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_15.png",
              },
            ],
          },
        ],
      },
      {
        id: 16,
        name: "Portugal",
        locale: "pt",
        flag: "🇵🇹",
        normalizedName: "portugal",
        colorScheme: {
          background: "#2F8D00",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_18.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_15.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_16.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_18.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_16.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_16.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_16.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_16.png",
              },
            ],
          },
        ],
      },
      {
        id: 17,
        name: "Slovakia",
        locale: "sk",
        flag: "🇸🇰",
        normalizedName: "slovakia",
        colorScheme: {
          background: "#3D58DB",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_19.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_16.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_17.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_19.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_17.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_17.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_17.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_17.png",
              },
            ],
          },
        ],
      },
      {
        id: 18,
        name: "Slovenia",
        locale: "si",
        flag: "🇸🇮",
        normalizedName: "slovenia",
        colorScheme: {
          background: "#0000FF",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_20.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_17.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_18.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_20.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_18.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_18.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_18.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_18.png",
              },
            ],
          },
        ],
      },
      {
        id: 19,
        name: "Spain",
        locale: "es",
        flag: "🇪🇸",
        normalizedName: "spain",
        colorScheme: {
          background: "#AA151B",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            title: "2015",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_21.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_18.png",
              },
            ],
          },
          {
            id: 2,
            title: "2010",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_22.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_19.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_19.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_21.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_19.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_19.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_19.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_19.png",
              },
            ],
          },
          {
            id: 3,
            title: "2002",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_23.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_20.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_20.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_22.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_20.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_20.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_20.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_20.png",
              },
            ],
          },
        ],
      },
      {
        id: 20,
        name: "Andorra",
        locale: "ad",
        flag: "🇦🇩",
        normalizedName: "andorra",
        colorScheme: {
          background: "#FEDD00",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_24.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_21.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_21.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_23.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_21.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_21.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_21.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_21.png",
              },
            ],
          },
        ],
      },
      {
        id: 21,
        name: "Monaco",
        locale: "mc",
        flag: "🇲🇨",
        colorScheme: {
          background: "#C51918",
          backgroundText: "light",
        },
        normalizedName: "monaco",
        coinSet: [
          {
            id: 1,
            title: "Albert II",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_25.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_22.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_22.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_24.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_22.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_22.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_22.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_22.png",
              },
            ],
          },
          {
            id: 2,
            title: "Rainier III",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_26.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_23.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_23.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_25.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_23.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_23.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_23.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_23.png",
              },
            ],
          },
        ],
      },
      {
        id: 22,
        name: "San Marino",
        locale: "sm",
        flag: "🇸🇲",
        normalizedName: "san-marino",
        colorScheme: {
          background: "#56C6F5",
          backgroundText: "light",
        },
        coinSet: [
          {
            id: 1,
            title: "2017",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/2_euro_rsm_sco_0.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/1_euro_rsm_sco.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/50_ecent_rsm_sco.tif_.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/20_ecent_rsm_sco.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/10_ecent_rsm_sco.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/5_ecent_rsm_sco.tif_.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/2_ecent_rsm_sco.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/1_ecent_rsm_sco.png",
              },
            ],
          },
          {
            id: 2,
            title: "2012",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_27.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_24.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_24.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_26.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_24.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_24.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_24.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_24.png",
              },
            ],
          },
        ],
      },
      {
        id: 23,
        name: "Vatican city",
        locale: "va",
        flag: "🇻🇦",
        normalizedName: "vatican-city",
        colorScheme: {
          background: "#FFDC17",
          backgroundText: "dark",
        },
        coinSet: [
          {
            id: 1,
            title: "Coat of arms",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_vc.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_vc.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cent_vc.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cent_vc_0.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cent_vc.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cent_vc_0.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cent_vc.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cent_vc.png",
              },
            ],
          },
          {
            id: 2,
            title: "Francis",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_28.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_25.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_25.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_27.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_25.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_25.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_25.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_25.png",
              },
            ],
          },
          {
            id: 3,
            title: "Benedict XVI",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_29.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_26.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_26.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_29.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_26.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_26.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_26.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_26.png",
              },
            ],
          },
          {
            id: 4,
            title: "Sede vacante",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_30.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_27.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_27.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_30.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_27.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_27.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_27.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_27.png",
              },
            ],
          },
          {
            id: 5,
            title: "John Paul II",
            coins: [
              {
                value: 2,
                name: "2 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_euro_31.png",
              },
              {
                value: 1,
                name: "1 Euro",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_euro_28.png",
              },
              {
                value: 0.5,
                name: "50 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_50_cents_28.png",
              },
              {
                value: 0.2,
                name: "20 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_20_cents_4.png",
              },
              {
                value: 0.1,
                name: "10 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_10_cents_28.png",
              },
              {
                value: 0.05,
                name: "5 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_5_cents_28.png",
              },
              {
                value: 0.02,
                name: "2 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_2_cents_28.png",
              },
              {
                value: 0.01,
                name: "1 cent",
                image:
                  "https://ec.europa.eu/info/sites/default/files/euro_coin_1_cents_28.png",
              },
            ],
          },
        ],
      },
    ] satisfies CountriesResponse
);
