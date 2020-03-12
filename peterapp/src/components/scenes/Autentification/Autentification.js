import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom'

import useFetch from '../../../hooks/useFetch'
import useLocalStorage from '../../../hooks/useLocalStorage'
import {CurrentUserContext} from '../../../contexts/currentUser'


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


const Autentication = props => {

  const isLogin = props.match.path === '/login'
  const pageTitle = isLogin ? 'Sign in' : 'Sign up'
  const apiUrl = isLogin ? '/v1/login' : '/v1/user'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl)
  const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)
  const [token, setToken] = useLocalStorage('id')
  const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)

  console.log('currentUserState', currentUserState)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', event)
    console.log(email, password)
    const user = isLogin ? { email, password } : { email, password, username }
    doFetch({
      method: 'post',
      data: {
        user
      }
    })
  }

  useEffect(() => {
    if (!response) {
      return
    }
    setToken(response.user.id)
    setIsSuccessfulSubmit(true)
    setCurrentUserState(state => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: response.user
    }))
  }, [response, setToken, setCurrentUserState])

  const classes = useStyles();

  if (isSuccessfulSubmit) {
    return <Redirect to='/' />
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {pageTitle}
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
        {!isLogin && (
                  <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  autoFocus
                />
        )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoading}
          >
            {pageTitle}
          </Button>

        </form>
      </div>
    </Container>
  );
}

export default Autentication
