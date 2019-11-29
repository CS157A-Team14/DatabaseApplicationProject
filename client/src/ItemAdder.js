import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import axios from 'axios';


const useStyles = makeStyles(theme => ({
      buttonhome: {
        marginBottom: theme.spacing(1),    
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,  
         
      },
      buttonsubmit: {
        marginBottom: theme.spacing(1),    
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,  
        marginLeft: theme.spacing(75),  
      },
      input: {
        display: 'none',
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textFieldPname: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 900,
      },    
      textFieldQuantity: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 75,
      },    
      textFieldPrice: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 75,
      },    
      textFieldType: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 175,
      },    
      root: {
        width: '95%',      
        margin: theme.spacing(4),
        overflowX: 'auto',
      },
  }));

  export default function ItemCard(props) {  
    const classes = useStyles();
    const [pName, setPName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState('')
    const [type,setType] = useState('')

    const handleSubmit = () => {
        console.log(pName)
        const product = {pName, quantity, price, type}
        axios.post("/product/add", product).then(response => {
            alert("Successfully added Item")
            window.location.href = "/main"
        })
    }

      return (
        <Paper className={classes.root}>
            {     
                <React.Fragment>
                     <Button variant="contained" className={classes.buttonhome}
                         onClick={() => window.location.href=`/main` }>
                               Home
                     </Button>

                     <div>
                        <h3> Please fill in information of new item:</h3>
                    </div> <br/>                   
                                <form className={classes.container} noValidate autoComplete="off">
                                    <div>
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Product Name"
                                        defaultValue=""
                                        className={classes.textFieldPname}
                                        margin="normal"
                                        value={pName}
                                        onChange={e => setPName(e.target.value)}
                                        />
                                        <TextField
                                            required
                                            id="standard-required"
                                            label="Quantity"
                                            defaultValue=""
                                            className={classes.textFieldQuantity}
                                            margin="normal"
                                            value={quantity}
                                            onChange={e => setQuantity(e.target.value)}
                                            />
                                        <TextField
                                            required
                                            id="standard-required"
                                            label="Price ($)"
                                            defaultValue=""
                                            className={classes.textFieldPrice}
                                            margin="normal"
                                            value={price}
                                            onChange={e => setPrice(e.target.value)}                                            
                                            />
                                       
                               
                                        <TextField
                                            required
                                            id="standard-required"
                                            label="Type"
                                            defaultValue=""
                                            className={classes.textFieldType}
                                            margin="normal"
                                            value={type}
                                            onChange={e => setType(e.target.value)}
                                            />
                                        </div>
                                </form>
                          

                    <Button variant="contained" className={classes.buttonsubmit} onClick={handleSubmit}>
                               Submit
                     </Button> <br/>
                </React.Fragment>
                
            }
        </Paper>
      );
  }
