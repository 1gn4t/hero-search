import { createSelector } from "reselect";

export const selectSearch = (store) => store.search;

export const selectCurrHero = (store) => store.search.currHero;

export const selectPowerstats = createSelector(selectCurrHero, (currHero) =>
  Object.entries(currHero.powerstats)
);

export const selectBiography = createSelector(selectCurrHero, (currHero) =>
  Object.entries(currHero.biography)
);

export const selectAppearance = createSelector(selectCurrHero, (currHero) =>
  Object.entries(currHero.appearance)
);

export const selectConnections = createSelector(selectCurrHero, (currHero) =>
  Object.entries(currHero.connections)
);

export const selectFractionHerosMap = createSelector(selectSearch, (store) =>
  store.herosMap.slice(0, store.sizeList)
);
