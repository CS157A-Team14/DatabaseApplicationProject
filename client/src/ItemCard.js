import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, InputAdornment } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell); 
  

  const useStyles = makeStyles(theme => ({
    root: {
      width: '95%',      
      margin: theme.spacing(4),
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,    
    },
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
  }));

export default function ItemCard(props) {
    const [olderVersion, setOlderVersion] = useState(undefined)    
    const [product, setProduct] = useState(undefined)
    const [pName, setPName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState('')
    const [type,setType] = useState('')
    const classes = useStyles();
    const getList = () => Object.keys(product).map((key, id) => (
        <StyledTableCell key={id} align="center">{product[key]}</StyledTableCell>
    ))

    useEffect(() => {
        if(!product){
            axios.get(`/product/getitem/${props.itemId}`).then(response => {
                if(response.data !== "Server error"){
                    setProduct(response.data) // product : undefined => {}
                    setOlderVersion(response.data)
                    const {pName, quantity, type, price} = response.data
                    setPName(pName)
                    setQuantity(quantity)
                    setPrice(price)
                    setType(type)
                } else {
                  alert("Item is not accepted")
                  window.location.href = "/main"
                }
            })
        }
    }, [product])

    const handleSubmit = () => {
      const {pName: opName, quantity: oquantity, price: oprice, type: otype} = olderVersion
      const whatUpdate = `${pName !== opName ? " name" : ""}${quantity !== oquantity ? " quantity" : ""}${price !== oprice ? " price" : ""}${type !== otype ? " type" : ""}`
      const product = {pName, quantity, price, type, whatUpdate}
      axios.put(`/product/update/${props.itemId}`, product).then(response => {
        alert("Successfully updated item")
        setProduct(undefined)
        setOlderVersion(undefined)
        window.location.href = "/main"
      })
    }

    return (
        <Paper className={classes.root}>
            {
                product &&
                
                <React.Fragment>
                   <Button variant="contained" className={classes.buttonhome}
                   onClick={() => window.location.href=`/main` }>
                               Home
                     </Button>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Product ID</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>                               
                        </TableRow>
                        </TableHead>
                        <TableBody>  
                            <TableRow>          
                                {getList()}
                            </TableRow>    
                        </TableBody>
                    </Table>
                    <div>
                        <h3> Please fill in information to edit item:</h3>
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
    )
}


