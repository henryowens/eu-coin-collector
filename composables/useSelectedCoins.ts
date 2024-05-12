import { useStorage } from "@vueuse/core";

import * as storageKeys from "~/constants/storageKeys";
import type { Coin, SelectedCoins } from "~/models/coins";
import type { CoinSet, Country } from "~/models/countries";

export default () => {
  const selectedCoins = useStorage<SelectedCoins>(
    storageKeys.SELECTED_COINS,
    [],
  );
  const { track } = useTracking();

  const toggleCoinSelect = (coin: Coin, set: CoinSet, country: Country) => {
    const id = country.id;
    const coinSetId = set.id;
    const value = coin.value;

    const index = selectedCoins.value.findIndex(
      ({
        id: selectedId,
        coinSetId: selectedCoinSetId,
        value: selectedValue,
      }) =>
        selectedId === id &&
        selectedCoinSetId === coinSetId &&
        selectedValue === value,
    );

    if (index === -1) {
      selectedCoins.value.push({ id, coinSetId, value });
      track(TrackEventNames.CoinSelected, {});
    } else {
      selectedCoins.value.splice(index, 1);
      track(TrackEventNames.CoinUnselected, {});
    }
  };

  const removeCoinSet = (coinSetId: number) => {
    selectedCoins.value = selectedCoins.value.filter(
      ({ coinSetId: selectedCoinSetId }) => selectedCoinSetId !== coinSetId,
    );
  };

  const addCoinSet = (coinSet: CoinSet, country: Country) => {
    coinSet.coins.forEach((coin) => {
      const index = selectedCoins.value.findIndex(
        ({ id, coinSetId, value }) =>
          id === country.id && coinSetId === coinSet.id && value === coin.value,
      );

      if (index !== -1) return;

      selectedCoins.value.push({
        id: country.id,
        coinSetId: coinSet.id,
        value: coin.value,
      });
    });
  };

  return {
    selectedCoins,
    toggleCoinSelect,
    addCoinSet,
    removeCoinSet,
  };
};
