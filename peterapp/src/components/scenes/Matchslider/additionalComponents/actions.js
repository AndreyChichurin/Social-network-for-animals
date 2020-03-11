import React from 'react'
// import Rewind from './actionsSlider/rewind'
import Dislike from './actionsSlider/dislike'
import Like from './actionsSlider/like'
// import Superlike from './actionsSlider/superlike'

const Actions =({person, modifySuperficialChoices}) => (
  <div id="actions">
    {/* <Rewind userId={person.id} /> */}
    <Dislike 
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
    />
     {/* <Like 
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
    /> */}
    {/* <Superlike
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
    /> */}
  </div>
)

export default Actions;
