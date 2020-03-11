import React from "react"
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

export default function LogoutButton() {

    return (
        <div>
          <NavLink to='/login' exact>
            <Button variant="contained" color="inherit">
              Sign In
            </Button>
          </NavLink>

          <NavLink to='/register' exact>
            <Button variant="contained" color="inherit">
              Sign Up
            </Button>
          </NavLink>
        </div>
    )

}
