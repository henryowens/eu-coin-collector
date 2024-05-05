export enum TrackEventNames {
  CoinSelected = "Coin Selected",
  CoinUnselected = "Country Unselected",
}

type TrackNameDataMap = {
  [TrackEventNames.CoinSelected]: {};
  [TrackEventNames.CoinUnselected]: {};
};

export default () => {
  const { $segment } = useNuxtApp();

  const track = <T extends keyof TrackNameDataMap>(
    eventName: T,
    data: TrackNameDataMap[T],
  ) => {
    if (!$segment) {
      console.warn("Segment is not available");

      return;
    }

    $segment.track(eventName, data);
  };

  return { track };
};
