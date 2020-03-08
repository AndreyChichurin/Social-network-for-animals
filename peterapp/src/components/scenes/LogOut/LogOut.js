import React from 'react';

import { useHistory } from "react-router-dom";

function LogOut() {
  localStorage.clear()
  const history = useHistory();
  history.push("/");

  return (
    <div></div>
  )
}


export default LogOut
