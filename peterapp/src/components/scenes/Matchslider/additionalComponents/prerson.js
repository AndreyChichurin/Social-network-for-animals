import React from 'react';
import Actions from './actions';

const Person = ({ person , modifySuperficialChoices}) => {
  const { name, desc, age , image, email, phone } = person;
  console.log(person)

  return (
    <>
    <div className='person'>
      <div className="person-photo">
        <img src={`${image}`} alt={name} />
      </div>
      <div className="person-description">
        <p className="person-name-age">
          {name}, <span>{age}</span>
        </p>
        <p className="person-info">{desc}</p>
        <p className="person-info">{email}</p>
        <p className="person-info">{phone}</p>
      </div>
    </div>
    <Actions
    person={person}
    modifySuperficialChoices={modifySuperficialChoices}
    />
    </>
  )
}

export default Person ; 
// img src="misc/like.png"
