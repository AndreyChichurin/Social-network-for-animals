import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import "./announcementForm.css";
import axios from 'axios'

const AnnouncementForm = () => {

  const [data, setData] = useState();
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:5000/api/users/profileEdited', { currentUserId: localStorage.id, phone, desc, image });
    // console.log(email, password)
    // const user = isLogin ? { email, password } : { email, password, username }
    // doFetch({
    //   method: 'post',
    //   data: {
    //     user
    //   }
    // })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/users/profileEdit', { currentUserId: localStorage.id });
        console.log(response.data[0])
        setData(response.data)
        setPhone(response.data[0].phone);
        setDesc(response.data[0].desc);
        setImage(response.data[0].image);
      } catch (e) {
        console.log(e);
        // setData({ users: data.users, isFetching: false });
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
    {data && data[0] ? (
    <section className="Announcement-box">
      <h1 className="form-hedline">Заполни форму</h1>
      <form className="announcement-form" onSubmit={handleSubmit}>
        <div className="loh">
          <div className="loh3">
            <div className="announcement-position">
              {/* <label>
                  <fieldset className="announcement-form--box fieldset-style">
                    <legend className="announcement-form--hedline legend-style">
                      Выберите категорию :
                    </legend>
                    <select className="announcement-form-select" name="title">
                      <option disabled>Выберите катигорию</option>
                      <option value="sale">Продажа</option>
                      <option value="purchase">Покупка</option>
                      <option value="losses">Потери/находка</option>
                      <option value="breeding-dogs">Вязка</option>
                      <option value="shelter">Отдам в хорошие руки</option>
                    </select>
                  </fieldset>
                </label> */}
              {/* <fieldset className="announcement-form--box fieldset-style">
                <label>
                  <legend className="announcement-box-hedline legend-style">
                    Гендерноя принадлежность:
                    </legend>
                  <ul className="announcement-list-checkbox">
                    <li className="fff announcement-item-checkbox filter-options filter-input">
                      <input
                        className="announcement-input-checkbox"
                        type="radio"
                        id="cable"
                        name="gender-men"
                      />
                      <label className="announcement-input-label" htmlFor="cable">
                        Мальчик
                        </label>
                    </li>
                    <li className="fff announcement-item-checkbox filter-options filter-input">
                      <input
                        className="announcement-input-checkbox"
                        type="radio"
                        id="bitch"
                        name="gender-girl"
                      />
                      <label className="announcement-input-label" htmlFor="bitch">
                        Девочка
                        </label>
                    </li>
                  </ul>
                </label>
              </fieldset> */}
              <fieldset className="announcement-tel fieldset-style">
                <label>
                  <legend className="legend-style">
                    Введите номер телефона:
                    </legend>
                  <p className="announcement-form-tel">
                    <input
                      className="announcement-input-tel"
                      name="phone"
                      type="tel"
                      pattern="8[0-9]{10}"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </p>
                </label>
              </fieldset>
              {/* <fieldset className="fieldset-style">
                <label>
                  <legend className="legend-style">Выберете пароду:</legend>
                  <select className="announcement-form-select" name="breed">
                    <option value="60">Аляскинский маламут</option>
                    <option value="12">Американский бульдог</option>
                    <option value="23">Американский кокер-спаниель</option>
                    <option value="26">Американский питбультерьер</option>
                    <option value="31">
                      Американский стаффордширский терьер
                      </option>
                    <option value="11">Английский бульдог</option>
                    <option value="22">Английский кокер-спаниель</option>
                    <option value="45">Англо-французская малая гончая</option>
                    <option value="61">Бедлингтон терьер</option>
                    <option value="75">Бельгийская овчарка малинуа</option>
                    <option value="67">Бельгийский гриффон</option>
                    <option value="71">Бернский зенненхунд</option>
                    <option value="44">Бигль</option>
                    <option value="59">Бобтейл</option>
                    <option value="68">Брюссельский гриффон</option>
                    <option value="13">Бульмастиф</option>
                    <option value="14">Бультерьер</option>
                    <option value="52">Веймаранер</option>
                    <option value="55">Вельш-корги-пемброк</option>
                    <option value="53">
                      Венгерская короткошерстная легавая(выжла)
                      </option>
                    <option value="15">Вест-хайленд-уайт-терьер</option>
                    <option value="16">Далматин</option>
                    <option value="8">Джек рассел-терьер</option>
                    <option value="9">Доберман</option>
                    <option value="50">Дратхаар</option>
                    <option value="7">Другая</option>
                    <option value="3">Западносибирская лайка</option>
                    <option value="17">Золотистый ретривер</option>
                    <option value="54">Ирландский сеттер</option>
                    <option value="18">Ирландский терьер</option>
                    <option value="19">Йоркширский терьер</option>
                    <option value="66">Ка Де Бо</option>
                    <option value="56">Кавалер-кинг-чарльз-спаниель</option>
                    <option value="20">Кавказская овчарка</option>
                    <option value="21">Кане корсо</option>
                    <option value="70">Кеесхонд</option>
                    <option value="74">Китайская хохлатая</option>
                    <option value="65">Колли</option>
                    <option value="69">Комондор</option>
                    <option value="51">Курцхаар</option>
                    <option value="1">Лабрадор ретривер</option>
                    <option value="10">Мальтийская болонка</option>
                    <option value="24">Миттельшнауцер</option>
                    <option value="25">Мопс</option>
                    <option value="2">Немецкая овчарка</option>
                    <option value="63">Немецкий боксер</option>
                    <option value="72">Ньюфаундленд</option>
                    <option value="73">Папильон</option>
                    <option value="5">Пекинес</option>
                    <option value="6">Померанский шпиц</option>
                    <option value="27">Пудель</option>
                    <option value="28">Ротвейлер</option>
                    <option value="48">Русская борзая</option>
                    <option value="47">Русская гончая</option>
                    <option value="57">Русский спаниель</option>
                    <option value="4">Русско-европейская лайка</option>
                    <option value="62">Самоедская лайка</option>
                    <option value="29">Сенбернар</option>
                    <option value="30">Среднеазиатская овчарка</option>
                    <option value="32">Такса</option>
                    <option value="49">Тибетский мастиф</option>
                    <option value="33">Той-терьер</option>
                    <option value="43">Фокстерьер</option>
                    <option value="34">Французский бульдог</option>
                    <option value="58">Хаски</option>
                    <option value="35">Цвергшнауцер</option>
                    <option value="36">Чау-чау</option>
                    <option value="37">Чихуахуа</option>
                    <option value="38">Шарпей</option>
                    <option value="39">Ши-тцу</option>
                    <option value="40">Эрдельтерьер</option>
                    <option value="46">Эстонская гончая</option>
                    <option value="64">Южноафриканский бурбуль</option>
                    <option value="42">Ягдтерьер</option>
                    <option value="41">Японский хин</option>
                  </select>
                </label>
              </fieldset> */}
            </div>
            <div className="textarea-style">
              <fieldset className="announcement-form-textarea fieldset-style">
                <label>
                  <legend className="legend-style">Описание:</legend>
                  <p className="announcement-form-description">
                    <textarea
                      className="modal-popup-text"
                      name="description"
                      id="description"
                      cols="61"
                      rows="6"
                      value={desc}
                    ></textarea>
                  </p>
                </label>
              </fieldset>
            </div>
          </div>
          <div className="photo-box">
            <div className="tiii">
              <img src={image} />
              {/* <p className="hoto-box-text">Загрузить фото</p> */}
            </div>
            <div className="btn-box">
              <button className="form-button foto-btn" type="buttun">
                Загрузить фото
                </button>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <button className="form-button" type="submit">
            Отправить
            </button>
        </div>
        </form>
        <NavLink to="/account" className="navlink">
          <button className="modal-close" type="button" onClick="window.location.href='/account'">

          </button>
        </NavLink>
      
    </section>
    ) : <div></div>}
    </div>
  );
}

export default AnnouncementForm;
