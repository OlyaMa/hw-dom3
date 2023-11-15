export class Sorting {
  constructor(data) {
    this.elementsForSorting = data;
  }

  static putArray(array, columnName) {
    if (document.querySelector(".arrow")) {
      document.querySelector(".arrow").remove();
    }
    const arr = Array.from(document.querySelectorAll("th")).find(
      (element) => element.textContent === columnName,
    );
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
    return this.elementsForSorting
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  sortAscendingTitle() {
    Sorting.putArray("↑", "title");
    return this.elementsForSorting
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
      .reverse();
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
