import { createTab } from "./tabGenerator.js";
import { sortFunction } from "./sortFunction.js";
import { fetchData } from "./fetchData.js";

function app() {
  createTab(fetchData());

  let i = 0;

  setInterval(() => {
    const resulOfSort = sortFunction(fetchData(), i);
    i++;
    if (i === 8) {
      i = 0;
    }
    createTab(resulOfSort);
  }, 2000);
}

app();
