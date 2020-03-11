import React from 'react'

const SuperLike = ({userId, modifySuperficialChoices}) => (
  <button 
    type="button"
    onClick={() => modifySuperficialChoices(userId, 'ADD_TO_SUPERLIKED_USERS')}
  >
    <img src="/misc/superlike.png" alt="Super like User" />

  </button>
);

export default SuperLike;
