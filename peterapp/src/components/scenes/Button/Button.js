import React from 'react'
import axios from 'axios'

import Button from '@material-ui/core/Button';
import Slider from '../LikeAppComponent/slidercomponent'


const ButtonGo = () => {

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.get('http://localhost:5000/api/users')
      .then(res => {
        console.log('succes', res.data)

      })
      .catch(error => {
        console.log('error', error)

      })
  }

  return (
    <div>
    <Button variant="contained" color="inherit" onClick={handleSubmit}>
      ПОГНАЛИ
  </Button>
    <Slider />
    </div>
  )
}

export default ButtonGo
