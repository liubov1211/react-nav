import React from "react";
import newYour from "..//images/newYour.jpg"

function HomePage() {
  return (
    <div>
      <p>Cкоро Новий Рік! Тож з Прийдешнім 2022 роком! Бажаю нічого не пропускати в прийдешньому
        році – ні мрію, за яку треба боротися, ні проєкт, який потрібно здати
        завчасно,
        ані урок, де чогось можна навчитися. А також бажаю стрункого тілa,
        товстого гаманця, маленької яхти, маленької вілли і маленького мільйонного
        статку!</p>
      <img src={newYour} className="bigImage"></img>
    </div>
  );
}

export default HomePage;