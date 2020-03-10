import React from 'react'

const Dislike = ({userId, modifySuperficialChoices}) => (
  <button 
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_DISLIKED_USERS')}
  >
    <img src="/misc/dislike.png" alt="Dislike User" />

  </button>
);

export default Dislike;
