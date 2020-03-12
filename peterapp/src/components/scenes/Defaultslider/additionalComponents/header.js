import React from 'react'
// import { NavLink } from 'react-router-dom'
// import Logo from './logo'
// import axios from 'axios'

const Header = () => {






  return (
    // <header>
    //   <section className="Announcement-box">
    //     <h1 className="form-hedline">Отфильтруй собачек</h1>
    //     <form className="announcement-form" onSubmit={handleSubmit}>
    //       <div className="loh">
    //         <div className="loh3">
    //           <div className="announcement-position">
    //             <fieldset className="fieldset-style">
    //               <label>
    //                 <legend className="legend-style">Выберете пароду:</legend>
    //                 <select required className="announcement-form-select" name="breed" onChange={(event) => setBreed(event.target.value)}>
    //                   <option value=""></option>
    //                   <option value="Аляскинский маламут">Аляскинский маламут</option>
    //                   <option value="Американский бульдог">Американский бульдог</option>
    //                   <option value="Американский кокер-спаниель">Американский кокер-спаниель</option>
    //                   <option value="Американский питбультерьер">Американский питбультерьер</option>
    //                   <option value="Американский стаффордширский терьер">Американский стаффордширский терьер</option>
    //                   <option value="Английский бульдог">Английский бульдог</option>
    //                   <option value="Английский кокер-спаниель">Английский кокер-спаниель</option>
    //                   <option value="Англо-французская малая гончая">Англо-французская малая гончая</option>
    //                   <option value="Бедлингтон терьер">Бедлингтон терьер</option>
    //                   <option value="Бельгийская овчарка малинуа">Бельгийская овчарка малинуа</option>
    //                   <option value="Бельгийский гриффон">Бельгийский гриффон</option>
    //                   <option value="Бернский зенненхунд">Бернский зенненхунд</option>
    //                   <option value="Бигль">Бигль</option>
    //                   <option value="Бобтейл">Бобтейл</option>
    //                   <option value="Брюссельский гриффон">Брюссельский гриффон</option>
    //                   <option value="Бульмастиф">Бульмастиф</option>
    //                   <option value="Бультерьер">Бультерьер</option>
    //                   <option value="Веймаранер">Веймаранер</option>
    //                   <option value="Вельш-корги-пемброк">Вельш-корги-пемброк</option>
    //                   <option value="Венгерская короткошерстная легавая(выжла)">Венгерская короткошерстная легавая(выжла)</option>
    //                   <option value="Вест-хайленд-уайт-терьер">Вест-хайленд-уайт-терьер</option>
    //                   <option value="Далматин">Далматин</option>
    //                   <option value="Джек рассел-терьер">Джек рассел-терьер</option>
    //                   <option value="Доберман">Доберман</option>
    //                   <option value="Дратхаар">Дратхаар</option>
    //                   <option value="Другая">Другая</option>
    //                   <option value="Западносибирская лайка">Западносибирская лайка</option>
    //                   <option value="Золотистый ретривер">Золотистый ретривер</option>
    //                   <option value="Ирландский сеттер">Ирландский сеттер</option>
    //                   <option value="Ирландский терьер">Ирландский терьер</option>
    //                   <option value="Йоркширский терьер">Йоркширский терьер</option>
    //                   <option value="Ка Де Бо">Ка Де Бо</option>
    //                   <option value="Кавалер-кинг-чарльз-спаниель">Кавалер-кинг-чарльз-спаниель</option>
    //                   <option value="Кавказская овчарка">Кавказская овчарка</option>
    //                   <option value="Кане корсо">Кане корсо</option>
    //                   <option value="Кеесхонд">Кеесхонд</option>
    //                   <option value="Китайская хохлатая">Китайская хохлатая</option>
    //                   <option value="Колли">Колли</option>
    //                   <option value="Комондор">Комондор</option>
    //                   <option value="Курцхаар">Курцхаар</option>
    //                   <option value="Лабрадор ретривер">Лабрадор ретривер</option>
    //                   <option value="Мальтийская болонка">Мальтийская болонка</option>
    //                   <option value="Миттельшнауцер">Миттельшнауцер</option>
    //                   <option value="Мопс">Мопс</option>
    //                   <option value="Немецкая овчарка">Немецкая овчарка</option>
    //                   <option value="Немецкий боксер">Немецкий боксер</option>
    //                   <option value="Ньюфаундленд">Ньюфаундленд</option>
    //                   <option value="Папильон">Папильон</option>
    //                   <option value="Пекинес">Пекинес</option>
    //                   <option value="Померанский шпиц">Померанский шпиц</option>
    //                   <option value="Пудель">Пудель</option>
    //                   <option value="Ротвейлер">Ротвейлер</option>
    //                   <option value="Русская борзая">Русская борзая</option>
    //                   <option value="Русская гончая">Русская гончая</option>
    //                   <option value="Русский спаниель">Русский спаниель</option>
    //                   <option value="Русско-европейская лайка">Русско-европейская лайка</option>
    //                   <option value="Самоедская лайка">Самоедская лайка</option>
    //                   <option value="Сенбернар">Сенбернар</option>
    //                   <option value="Среднеазиатская овчарка">Среднеазиатская овчарка</option>
    //                   <option value="Такса">Такса</option>
    //                   <option value="Тибетский мастиф">Тибетский мастиф</option>
    //                   <option value="Той-терьер">Той-терьер</option>
    //                   <option value="Фокстерьер">Фокстерьер</option>
    //                   <option value="Французский бульдог">Французский бульдог</option>
    //                   <option value="Хаски">Хаски</option>
    //                   <option value="Цвергшнауцер">Цвергшнауцер</option>
    //                   <option value="Чау-чау">Чау-чау</option>
    //                   <option value="Чихуахуа">Чихуахуа</option>
    //                   <option value="Шарпей">Шарпей</option>
    //                   <option value="Ши-тцу">Ши-тцу</option>
    //                   <option value="Эрдельтерьер">Эрдельтерьер</option>
    //                   <option value="Эстонская гончая">Эстонская гончая</option>
    //                   <option value="Южноафриканский бурбуль">Южноафриканский бурбуль</option>
    //                   <option value="Ягдтерьер">Ягдтерьер</option>
    //                   <option value="Японский хин">Японский хин</option>
    //                 </select>
    //               </label>
    //             </fieldset>
    //           </div>
    //           <fieldset className="fieldset-style">
    //             <label>
    //               <legend className="legend-style">Выберете пол:</legend>
    //               <select required className="announcement-form-select" name="gender" onChange={(event) => setGender(event.target.value)}>
    //               <option value=""></option>
    //                 <option value="men">Мальчик</option>
    //                 <option value="girl">Девочка</option>
    //               </select>
    //             </label>
    //           </fieldset>
    //           <fieldset className="fieldset-style">
    //             <label>
    //               <legend className="legend-style">Выберете возраст:</legend>
    //               <select required className="announcement-form-select" name="age" onChange={(event) => setAge(event.target.value)}>
    //               <option value=""></option>
    //                 <option value="1">1</option>
    //                 <option value="2">2</option>
    //                 <option value="3">3</option>
    //                 <option value="4">4</option>
    //                 <option value="5">5</option>
    //                 <option value="6">6</option>
    //                 <option value="7">7</option>
    //                 <option value="8">8</option>
    //                 <option value="9">9</option>
    //                 <option value="10">10</option>
    //                 <option value="11">11</option>
    //                 <option value="12">12</option>
    //                 <option value="13">13</option>
    //                 <option value="14">14</option>
    //               </select>
    //             </label>
    //           </fieldset>
    //         </div>
    //       </div>
    //       <div className="btn-box">
    //         <button className="form-button" type="submit">
    //           Отправить
    //         </button>
    //       </div>
    //     </form>
    //     {/* <NavLink to="/account" className="navlink">
    //       <button className="modal-close" type="button" onClick="window.location.href='/account'">

    //       </button>
    //     </NavLink> */}

    //   </section>

    // </header>
    <div></div>
  )
}

export default Header;
