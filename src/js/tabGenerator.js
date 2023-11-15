export function createTab(jsonData, body = document.body) {
  const rows = [];

  jsonData.forEach((item) => {
    rows.push(
      `<tr data-id=${item.id} data-title="${item.title}" data-year=${
        item.year
      } data-imdb=${item.imdb}>
        <td>#${item.id}</td>
        <td>${item["title"]}</td>
        <td>(${item.year})</td>
        <td>imdb: ${item.imdb.toFixed(2)}</td>
      </tr>`,
    );
  });

  const table = document.querySelector("table");

  if (!table) {
    const tab = document.createElement("table");
    const firstRow = document.createElement("tr");
    firstRow.innerHTML = `<th>id</th><th>title</th><th>year</th><th>imdb</th>`;
    tab.appendChild(firstRow);
    rows.forEach((row) => {
      tab.innerHTML += row;
    });
    body.append(tab);
  } else {
    Array.from(table.querySelectorAll("[data-id]")).forEach(
      (item) => (item.outerHTML = rows.shift()),
    );
  }
}
