import React, { useState, useEffect } from 'react';
import MatchComponent from '../LikeAppComponent/matchingcomponent'


const Match = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <h1> Вы понравились друг другу </h1>
      <MatchComponent
        name="John"
        age='13'
        owner='Андрей Сергеевич Щукин'
        location='Петербург'
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb1rbKH9VCUTzbqNwyRaVVoz5CFto6NTy5EHBxwnAd9kc4oUe7"
        description="Хороший пёсик"
      />
      <MatchComponent />
      <MatchComponent />
    </div>
  );
}

export default Match