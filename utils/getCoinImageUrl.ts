export default ({
  setTitle,
  noramlisedCountryName,
  baseCoinName,
}: {
  noramlisedCountryName: string;
  setTitle?: string;
  baseCoinName: string;
}) =>
  `/assets/coins/${noramlisedCountryName.toLowerCase()}/${setTitle ? `${setTitle.toLowerCase().replaceAll(" ", "_")}-` : ""}${baseCoinName.toLowerCase().replaceAll(" ", "_")}.png`;
