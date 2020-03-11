import React from 'react';
import Actions from './actions';

const Person = ({ person , modifySuperficialChoices}) => {
  const { name, desc, age , image } = person;

  return (
    <>
    <div className='person' style={{boxShadow: "5px 10px 1px #9E9E9F"}}>
      <div className="person-photo">
        <img src={`${image}`} alt={name} />
      </div>
      <div className="person-description">
        <p className="person-name-age">
          {name}, <span>{age}</span>
        </p>
        <p className="person-info">{desc}</p>
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
