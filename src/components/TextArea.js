import { makeObject } from "../tools/makeObject";

export const TextArea = ({ setFileContent, setIsTextArea }) => {
  return (
    <textarea
      rows="7"
      cols="50"
      placeholder="Введите или вставьте данные из шопов"
      onChange={(event) => {
        setFileContent(makeObject(event.target.value, true));
        setIsTextArea(0);
      }}
      //Тут можно было бы использовать дебаунс функцию
      //Если бы мы знали что пользователь теоретически может вводить большое колличество данных
    />
  );
};
