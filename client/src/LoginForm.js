import React, {useState} from 'react'; // useState in React Hooks
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

export default function LoginForm(props) {
  const classes = useStyles(); 
  const [Id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios.post("/login", {Id, password}).then(response => {
      if(response.data === "NO Account exists" ){
        alert("ID or password is not correct")
      } else {
                
        window.location.href = "/main"
      }
    })
  }
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>        
        <Typography component="h1" variant="h5">
          Log In
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
            value={Id}
            onChange={e => setId(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange= {e => setPassword(e.target.value)}

          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"           
            color = "primary"
            className={classes.submit}
          >
            Log In
          </Button>

        </form>
      </div>
      
    </Container>
  );
}