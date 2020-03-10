import React from "react"
import Button from '@material-ui/core/Button';
export default function LogoutButton() {

    return (
        <div>
            <span color='green'>
                <Button variant="contained" color="inherit" href='/login'>
                    Sign In
                </Button> </span>
            <span color='green'>
                <Button variant="contained" color="inherit" href='/registration'>
                    Sign Up
                </Button> 
            </span>
        </div>
    )

}
