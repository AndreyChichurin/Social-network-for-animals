import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../../../index.css";
// import Header from "./additionalComponents/header";
import Person from "./additionalComponents/prerson";
// import Lonely from "./additionalComponents/lonely";
// import data from './data.json';
import axios from 'axios'
import emailjs from 'emailjs-com';
import Navbar from "../Navbar/Navbar";



const Slider = () => {
  const [data, setData] = useState();
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;
  const [breed, setBreed] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();

  const handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.post("http://localhost:5000/api/users/sort", {
      currentUserId: localStorage.id,
      breed,
      gender,
      age
    });
    setData(response.data);
    setPeople(response.data);
    return <Redirect to="/" />;
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post("http://localhost:5000/api/users", {
          currentUserId: localStorage.id
        });
        console.log(response.data);
        setData(response.data);
        setPeople(response.data);
      } catch (e) {
        console.log(e);
        // setData({ users: data.users, isFetching: false });
      }
    };
    fetchUsers();
  }, []);

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          const infoFromMail = async () => {

            const response = await axios.post('http://localhost:5000/api/users/infoFromMail', { id: userId, currentUserId: localStorage.id })
            // .then(function (response) {
              // console.log('SUCCESS!', response.data[0][0].name);
              const to_email= response.data[0][0].email
              const to_name= response.data[0][0].name
              const from_name= response.data[1][0].name
              const from_gender= response.data[1][0].gender
              const from_breed= response.data[1][0].breed
              const from_age= response.data[1][0].age
            // }, function (error) {
            //   console.log('FAILED...', error);
            // });

            const templateParams = {
              to_email: to_email,
              to_name: to_name,
              from_name: from_name,
              from_gender: from_gender,
              from_breed: from_breed,
              from_age: from_age
            };

            emailjs.send('gmail', 'template_goX4oFEZ', templateParams, 'user_0LeiddUf0NMApZ9zocbkH')
              .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
              }, function (error) {
                console.log('FAILED...', error);
              });

          }
          infoFromMail()

          const responseSave = async () => { await axios.post('http://localhost:5000/api/users/like', { id: userId, currentUserId: localStorage.id }) }
          responseSave()


          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          const response = async () => {
            await axios.post("http://localhost:5000/api/users/dislike", {
              id: userId,
              currentUserId: localStorage.id
            });
          };
          response();

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          const response = async () => {
            await axios.post("http://localhost:5000/api/users/superlike", {
              id: userId,
              currentUserId: localStorage.id
            });
          };
          response();

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };
  return (
    <div>
      <Navbar />
      <div className='container'>
      <section className="Announcement-box">
        <form className="announcement-form" onSubmit={handleSubmit}>
        <h1 className="form-hedline">Отфильтруй собачек</h1>
          <div className="loh">
            <div className="loh3">
              <div className="announcement-position">
                <fieldset className="fieldset-style">
                  <label>
                    <legend className="legend-style">Выберете породу:</legend>
                    <select required className="announcement-form-select" name="breed" onChange={(event) => setBreed(event.target.value)}>
                      <option value=""></option>
                      <option value="Аляскинский маламут">Аляскинский маламут</option>
                      <option value="Американский бульдог">Американский бульдог</option>
                      <option value="Американский кокер-спаниель">Американский кокер-спаниель</option>
                      <option value="Американский питбультерьер">Американский питбультерьер</option>
                      <option value="Американский стаффордширский терьер">Американский стаффордширский терьер</option>
                      <option value="Английский бульдог">Английский бульдог</option>
                      <option value="Английский кокер-спаниель">Английский кокер-спаниель</option>
                      <option value="Англо-французская малая гончая">Англо-французская малая гончая</option>
                      <option value="Бедлингтон терьер">Бедлингтон терьер</option>
                      <option value="Бельгийская овчарка малинуа">Бельгийская овчарка малинуа</option>
                      <option value="Бельгийский гриффон">Бельгийский гриффон</option>
                      <option value="Бернский зенненхунд">Бернский зенненхунд</option>
                      <option value="Бигль">Бигль</option>
                      <option value="Бобтейл">Бобтейл</option>
                      <option value="Брюссельский гриффон">Брюссельский гриффон</option>
                      <option value="Бульмастиф">Бульмастиф</option>
                      <option value="Бультерьер">Бультерьер</option>
                      <option value="Веймаранер">Веймаранер</option>
                      <option value="Вельш-корги-пемброк">Вельш-корги-пемброк</option>
                      <option value="Венгерская короткошерстная легавая(выжла)">Венгерская короткошерстная легавая(выжла)</option>
                      <option value="Вест-хайленд-уайт-терьер">Вест-хайленд-уайт-терьер</option>
                      <option value="Далматин">Далматин</option>
                      <option value="Джек рассел-терьер">Джек рассел-терьер</option>
                      <option value="Доберман">Доберман</option>
                      <option value="Дратхаар">Дратхаар</option>
                      <option value="Другая">Другая</option>
                      <option value="Западносибирская лайка">Западносибирская лайка</option>
                      <option value="Золотистый ретривер">Золотистый ретривер</option>
                      <option value="Ирландский сеттер">Ирландский сеттер</option>
                      <option value="Ирландский терьер">Ирландский терьер</option>
                      <option value="Йоркширский терьер">Йоркширский терьер</option>
                      <option value="Ка Де Бо">Ка Де Бо</option>
                      <option value="Кавалер-кинг-чарльз-спаниель">Кавалер-кинг-чарльз-спаниель</option>
                      <option value="Кавказская овчарка">Кавказская овчарка</option>
                      <option value="Кане корсо">Кане корсо</option>
                      <option value="Кеесхонд">Кеесхонд</option>
                      <option value="Китайская хохлатая">Китайская хохлатая</option>
                      <option value="Колли">Колли</option>
                      <option value="Комондор">Комондор</option>
                      <option value="Курцхаар">Курцхаар</option>
                      <option value="Лабрадор ретривер">Лабрадор ретривер</option>
                      <option value="Мальтийская болонка">Мальтийская болонка</option>
                      <option value="Миттельшнауцер">Миттельшнауцер</option>
                      <option value="Мопс">Мопс</option>
                      <option value="Немецкая овчарка">Немецкая овчарка</option>
                      <option value="Немецкий боксер">Немецкий боксер</option>
                      <option value="Ньюфаундленд">Ньюфаундленд</option>
                      <option value="Папильон">Папильон</option>
                      <option value="Пекинес">Пекинес</option>
                      <option value="Померанский шпиц">Померанский шпиц</option>
                      <option value="Пудель">Пудель</option>
                      <option value="Ротвейлер">Ротвейлер</option>
                      <option value="Русская борзая">Русская борзая</option>
                      <option value="Русская гончая">Русская гончая</option>
                      <option value="Русский спаниель">Русский спаниель</option>
                      <option value="Русско-европейская лайка">Русско-европейская лайка</option>
                      <option value="Самоедская лайка">Самоедская лайка</option>
                      <option value="Сенбернар">Сенбернар</option>
                      <option value="Среднеазиатская овчарка">Среднеазиатская овчарка</option>
                      <option value="Такса">Такса</option>
                      <option value="Тибетский мастиф">Тибетский мастиф</option>
                      <option value="Той-терьер">Той-терьер</option>
                      <option value="Фокстерьер">Фокстерьер</option>
                      <option value="Французский бульдог">Французский бульдог</option>
                      <option value="Хаски">Хаски</option>
                      <option value="Цвергшнауцер">Цвергшнауцер</option>
                      <option value="Чау-чау">Чау-чау</option>
                      <option value="Чихуахуа">Чихуахуа</option>
                      <option value="Шарпей">Шарпей</option>
                      <option value="Ши-тцу">Ши-тцу</option>
                      <option value="Эрдельтерьер">Эрдельтерьер</option>
                      <option value="Эстонская гончая">Эстонская гончая</option>
                      <option value="Южноафриканский бурбуль">Южноафриканский бурбуль</option>
                      <option value="Ягдтерьер">Ягдтерьер</option>
                      <option value="Японский хин">Японский хин</option>
                    </select>
                  </label>
                </fieldset>
              </div>
              <fieldset className="fieldset-style">
                <label>
                  <legend className="legend-style">Выберете пол:</legend>
                  <select required className="announcement-form-select" name="gender" onChange={(event) => setGender(event.target.value)}>
                    <option value=""></option>
                    <option value="men">Мальчик</option>
                    <option value="girl">Девочка</option>
                  </select>
                </label>
              </fieldset>
              <fieldset className="fieldset-style">
                <label>
                  <legend className="legend-style">Выберете возраст:</legend>
                  <select required className="announcement-form-select" name="age" onChange={(event) => setAge(event.target.value)}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                  </select>
                </label>
              </fieldset>
              <div className="btn-box">
            <button className="form-button" type="submit">
              Отправить
            </button>
          </div>
            </div>
          </div>
        </form>
        {/* <NavLink to="/account" className="navlink">
          <button className="modal-close" type="button" onClick="window.location.href='/account'">

          </button>
        </NavLink> */}
      </section>

      {/* </section>

      <div className="app"> */}

      <div className="app" id="app-1">

        {/* {people && people[0] ? (
          <Person
            key={people[0].id}
            person={people[0]}
            modifySuperficialChoices={modifySuperficialChoices}
            likedUsers={likedUsers}
          />
        ) : (people &&
          <div>Вы всех просмотрели</div>
          )} */}

        {people && people.map(elem => {
          return <div>
            <Person
              key={elem.id}
              person={elem}
              modifySuperficialChoices={modifySuperficialChoices}
              likedUsers={likedUsers}
            />
          </div>
        }
        )}
            {/* // <Lonely
            //   activeUserImage={people[activeUser].image}
            //   likedUsers={likedUsers}
            //   superLikedUsers={superLikedUsers}
            // /> */}
      </div>
    </div>
    </div>
  );
};

export default Slider;
