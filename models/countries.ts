import type { Coin } from "./coins";

export interface CoinSet {
  id: number;
  title?: string;
  coins: Coin[];
}

export interface Country {
  id: number;
  name: string;
  flag: string;
  normalizedName: string;
  coinSet: CoinSet[];
}

export type Countries = Country[];

export type SelectedCountries = number[];
