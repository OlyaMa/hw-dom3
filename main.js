/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tabGenerator.js
function createTab(jsonData, body = document.body) {
  const rows = [];
  jsonData.forEach(item => {
    rows.push(`<tr data-id=${item.id} data-title="${item.title}" data-year=${item.year} data-imdb=${item.imdb}>
        <td>#${item.id}</td>
        <td>${item["title"]}</td>
        <td>(${item.year})</td>
        <td>imdb: ${item.imdb.toFixed(2)}</td>
      </tr>`);
  });
  const table = document.querySelector("table");
  if (!table) {
    const tab = document.createElement("table");
    const firstRow = document.createElement("tr");
    firstRow.innerHTML = `<th>id</th><th>title</th><th>year</th><th>imdb</th>`;
    tab.appendChild(firstRow);
    rows.forEach(row => {
      tab.innerHTML += row;
    });
    body.append(tab);
  } else {
    Array.from(table.querySelectorAll("[data-id]")).forEach(item => item.outerHTML = rows.shift());
  }
}
;// CONCATENATED MODULE: ./src/js/Sorting.js
class Sorting {
  constructor(data) {
    this.elementsForSorting = data;
  }
  static putArray(array, columnName) {
    if (document.querySelector(".arrow")) {
      document.querySelector(".arrow").remove();
    }
    const arr = Array.from(document.querySelectorAll("th")).find(element => element.textContent === columnName);
    const arrowElement = document.createElement("span");
    arrowElement.textContent = array;
    arrowElement.classList.add("arrow");
    arr.insertAdjacentElement("beforeend", arrowElement);
  }
  sortDescendingId() {
    Sorting.putArray("↓", "id");
    return this.elementsForSorting.slice().sort((a, b) => a.id - b.id);
  }
  sortAscendingId() {
    Sorting.putArray("↑", "id");
    return this.elementsForSorting.slice().sort((a, b) => b.id - a.id);
  }
  sortDescendingTitle() {
    Sorting.putArray("↓", "title");
    return this.elementsForSorting.slice().sort((a, b) => a.title.localeCompare(b.title));
  }
  sortAscendingTitle() {
    Sorting.putArray("↑", "title");
    return this.elementsForSorting.slice().sort((a, b) => a.title.localeCompare(b.title)).reverse();
  }
  sortDescendingYear() {
    Sorting.putArray("↓", "year");
    return this.elementsForSorting.slice().sort((a, b) => a.year - b.year);
  }
  sortAscendingYear() {
    Sorting.putArray("↑", "year");
    return this.elementsForSorting.slice().sort((a, b) => b.year - a.year);
  }
  sortDescendingImdb() {
    Sorting.putArray("↓", "imdb");
    return this.elementsForSorting.slice().sort((a, b) => a.imdb - b.imdb);
  }
  sortAscendingImdb() {
    Sorting.putArray("↑", "imdb");
    return this.elementsForSorting.slice().sort((a, b) => b.imdb - a.imdb);
  }
}
;// CONCATENATED MODULE: ./src/js/sortFunction.js

function sortFunction(nodeList, i) {
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
    7: () => sorting.sortAscendingImdb()
  };
  return sortMethods[`${i}`]();
}
;// CONCATENATED MODULE: ./data.json
const data_namespaceObject = JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');
;// CONCATENATED MODULE: ./src/js/fetchData.js


// Здесь могла бы быть феч-функция загрузки файла.

function fetchData() {
  return data_namespaceObject;
}
;// CONCATENATED MODULE: ./src/js/app.js



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
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;