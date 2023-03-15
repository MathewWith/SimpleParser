//для одной переменной не стал создавать отдельный файл(consts), так как она только одна :)
const rowsName = [
  "number",
  "status",
  "facebook_login",
  "facebook_password",
  "facebook_token",
  "email_login",
  "email_password",
  "useragent",
  "cookies",
  "notes",
];

//Эта функция является мини парсером
//Она не выполняет супер сложных вычислений и не валидирует значения(хотя могла бы)
//Она лишь собирает в объект, нужной для таблицы структуры, всё то что нам передали в файле
export function makeObject(data, isTextArea = false) {
  const objects = [];
  const arraysForEditing = isTextArea ? data.split("\n") : data.split("\r\n");
  const arrays = arraysForEditing.map((item) => item.split(" "));
  for (let array of arrays) {
    const object = {};
    let i = 0;
    for (let key of rowsName) {
      object[key] = array[i];
      i++;
    }
    objects.push(object);
  }
  return objects;
}
