import React from "react"
import Button from '@material-ui/core/Button';

export default function LoginButton() {

    return (
        <div>
            <span color='green'>
                <Button variant="contained" color="inherit" href='/account'>
                    Account
                </Button>
            </span>
            <span color='green'>
                <Button variant="contained" color="inherit" href='/logout'>
                    EXIT
                </Button>
            </span>
        </div>
    )

}
