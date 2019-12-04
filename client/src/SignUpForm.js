import React, {useState} from 'react'; // useState in React Hooks
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import connection from 'mysqlconn';

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
    const [userID, setId] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setPassword2] = useState("")

    const handleSubmit = () => {
        if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
            const account = {userID, password}
            alert("Account successfully created")
                connection.connect(function(err) {
                var sql = "INSERT INTO account (userID, password) VALUES (document.getElementById('userID').value,document.getElementById('password').value )";
                connection.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                  });
                })
        } else {
            alert("Password does not match")
        }
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
            name="confirmPassword"
            autoComplete="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange= {e => setPassword2(e.target.value)}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"           
            color = "primary"
            className={classes.submit}
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