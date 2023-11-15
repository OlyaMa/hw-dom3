import { Sorting } from "./Sorting.js";

export function sortFunction(nodeList, i) {
  const elementsForSorting = Array.from(nodeList);
  const sorting = new Sorting(elementsForSorting);
  const sortMethods = {
    0: () => sorting.sortDescendingId(),
    1: () => sorting.sortAscendingId(),
    2: () => sorting.sortDescendingTitle(),
    3: () => sorting.sortAscendingTitle(),
    4: () => sorting.sortDescendingYear(),
    5: () => sorting.sortAscendingYear(),
    6: () => sorting.sortDescendingImdb(),
    7: () => sorting.sortAscendingImdb(),
  };

  return sortMethods[`${i}`]();
}
