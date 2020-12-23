import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import './sign-in.styles.css';
const SignIn = () => {
    return (
        <div className="container">
                <form action="" className="container-form">
                    <TextField className="username_input" required id="input_username" label="username" />
                    <TextField className="password_input" required id="input_password" label="password" type="password" />
                    <Button className="form-button" type="submit" variant="outlined" color="primary">
                         Submit
                    </Button>
                </form>
        </div>
    )
}

export default SignIn
