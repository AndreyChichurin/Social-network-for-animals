import React, { useState, useEffect } from 'react';
import '../../../index.css'
// import Header from './additionalComponents/header';
import Person from './additionalComponents/prerson';
// import Lonely from './additionalComponents/lonely';
// import data from './data.json';
import axios from 'axios'
import emailjs from 'emailjs-com';

const Likedbyslider = () => {

  const [data, setData] = useState();
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/users/likedby', {currentUserId:localStorage.id});
        console.log(response.data)
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
      case 'ADD_TO_LIKED_USERS':
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
              const from_email= response.data[1][0].email
              const from_phone= response.data[1][0].phone
            // }, function (error) {
            //   console.log('FAILED...', error);
            // });

            const templateParams = {
              to_email: to_email,
              to_name: to_name,
              from_name: from_name,
              from_gender: from_gender,
              from_breed: from_breed,
              from_age: from_age,
              from_email: from_email,
              from_phone: from_phone
            };

            emailjs.send('PugPugTeam', 'template_goX4oFEZ_clone', templateParams, 'user_0LeiddUf0NMApZ9zocbkH')
              .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
              }, function (error) {
                console.log('FAILED...', error);
              });

          }
          infoFromMail()

          const response = async () => { await axios.post('http://localhost:5000/api/users/like', {id:userId, currentUserId:localStorage.id}) }
          response()

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          const response = async () => { await axios.post('http://localhost:5000/api/users/dislike', {id:userId, currentUserId:localStorage.id}) }
          response()

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_SUPERLIKED_USERS':
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          const response = async () => { await axios.post('http://localhost:5000/api/users/superlike', {id:userId, currentUserId:localStorage.id}) }
          response()

          setSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };

  return (
    <div className="app">
      {/* <Header /> */}
      {people && people.map(elem => {
          return <div>
      
        <Person
          key={elem.id}
          person={elem}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
        </div>
      })}
      {/* <div>Вы всем ответили</div>} */}

      {/* // (people &&
      //   // <div></div>
      //   <Lonely
      //     activeUserImage={people[activeUser].image}
      //     likedUsers={likedUsers}
      //     superLikedUsers={superLikedUsers}
      //   />
      //   ) */}
        
    </div>
  );
};

export default Likedbyslider;
