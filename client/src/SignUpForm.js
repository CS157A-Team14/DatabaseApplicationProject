import React, {useState, useEffect} from 'react'; // useState in React Hooks
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },  
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'black',
  },
}));

export default function SignUpForm(props) {

    const classes = useStyles(); 
    const [userID, setId] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = e => {
      e.preventDefault()
      const account = {userID, password, username}
      axios.post("/signup", account).then(response => {
        if(response.data === "success"){
          alert("Successfully sign up")
          window.location.href = "/"
        } else {
          alert(response.data)
        }
      }).catch(e => alert(e.message))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>        
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="accountID"
            label="Account ID"
            name="id"
            autoComplete="Account ID"
            autoFocus 
            value={userID}
            onChange={e => setId(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            autoComplete="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange= {e => setPassword(e.target.value)}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Username"
            autoComplete="Username"
            label="Username"
            type="Username"
            id="Username"
            value={username}
            onChange= {e => setUsername(e.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"           
            color = "primary"
            className={classes.submit}
            onClick={handleSubmit}
            >
            Sign Up
          </Button>

          <Button 
            variant="contained" 
            color = "primary"
            fullWidth
            className={classes.submit}
            onClick={() => window.location.href=`/` }
            >
            Back to Log In
          </Button>

        </form>
      </div>
      
    </Container>
  );
}