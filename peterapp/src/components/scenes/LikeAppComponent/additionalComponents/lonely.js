import React from 'react'
import LikedPerson from './likedperson'

const Lonely = ({activeUserImage, likedUsers, superLikedUsers}) => (
  <div className="lonely">
    <p>There's no new around you.</p>

    <span className="pulse">
      <img src={`/images/users/${activeUserImage}`} alt="You..." />
    </span>

    <div id="liked-people">
      <p>
        {likedUsers.length > 0 && 
        "People you liked...let's hope for better"}
      </p>

      {likedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}

      <p>{superLikedUsers.length && 'People you superliked'}</p>

      {superLikedUsers.map(item => (
        <LikedPerson key={item.id} person={item} />
      ))}
    </div>
  </div>
);

export default Lonely;
