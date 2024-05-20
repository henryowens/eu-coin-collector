import type { CoinsResponse } from "~/models/api";

export default defineEventHandler(
  () =>
    [
      {
        value: 1,
        name: "1 Euro",
        image: "/assets/coins/default/1_euro.jpeg",
      },
      {
        value: 2,
        name: "2 Euro",
        image: "/assets/coins/default/2_euro.jpeg",
      },
      {
        value: 0.5,
        name: "50 Cents",
        image: "/assets/coins/default/50_cent.jpeg",
      },
      {
        value: 0.2,
        name: "20 Cents",
        image: "/assets/coins/default/20_cent.jpeg",
      },
      {
        value: 0.1,
        name: "10 Cents",
        image: "/assets/coins/default/10_cent.jpeg",
      },
      {
        value: 0.05,
        name: "5 Cents",
        image: "/assets/coins/default/5_cent.jpeg",
      },
      {
        value: 0.02,
        name: "2 Cents",
        image: "/assets/coins/default/2_cent.jpeg",
      },
      {
        value: 0.01,
        name: "1 Cent",
        image: "/assets/coins/default/1_cent.jpeg",
      },
    ] satisfies CoinsResponse,
);
