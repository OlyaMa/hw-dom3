import jsonfile from "../../data.json";

// Здесь могла бы быть феч-функция загрузки файла.

export function fetchData() {
  return jsonfile;
}
