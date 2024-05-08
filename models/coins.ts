export interface Coin {
  value: number;
  name: string;
  image: string;
}

export type Coins = Coin[];

export interface SelectedCoin {
  id: number;
  coinSetId: number;
  value: number;
}

export type SelectedCoins = SelectedCoin[];
