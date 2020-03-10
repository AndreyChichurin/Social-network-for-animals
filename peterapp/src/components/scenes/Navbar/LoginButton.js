import React from "react"
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom'

export default function LoginButton() {

    return (
        <div>
          <NavLink to='/logout' exact>
            <Button variant="contained" color="inherit">
                EXIT
            </Button>
          </NavLink>
        </div>
    )

}
