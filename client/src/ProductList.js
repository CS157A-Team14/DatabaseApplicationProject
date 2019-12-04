import React, {useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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
    button: {
        marginBottom: theme.spacing(1),        
        marginLeft: theme.spacing(1),
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,    
      },
    buttonnew: {
        marginBottom: theme.spacing(1), 
        marginLeft: theme.spacing(112),   
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,    
      },
      input: {
        display: 'none',
      },
  }));

export default function ProductList() {
    const [products, setProducts] = useState(undefined)
    const [sorted, setSorted] = useState(undefined)

    const handleDelete = id => {
        axios.delete(`/product/delete/${id}`).then(response => {
            setProducts(undefined)
        })
    }

    const classes = useStyles();
    const getList = () => products.map((product, id) => (
        <TableRow key={id}>
            <StyledTableCell align="center">{product.pName}</StyledTableCell>
            <StyledTableCell align="center">{product.quantity}</StyledTableCell>
            <StyledTableCell align="center">{product.price}</StyledTableCell>
            <StyledTableCell align="center">{product.type}</StyledTableCell>
            <StyledTableCell align="center">
           
                <Button 
                    variant="contained" className={classes.button} 
                    onClick={() => window.location.href=`/itemcard/${product.pId}` }
                >
                                    Edit
                </Button>  <span>&nbsp;&nbsp;</span>
                <Button variant="contained" className={classes.button}
                     onClick={() => window.location.href=`/itemhistory/${product.pId}` }
                >
                                    View History
                </Button>  <span>&nbsp;&nbsp;</span>                
                <IconButton aria-label="delete" onClick={() => handleDelete(product.pId)}>
                        <DeleteIcon />
                </IconButton>
            
            
            </StyledTableCell>
        </TableRow>
    ))

    useEffect(() => {
        if(!products && !sorted){
            // Promise
            axios.get("/product").then(response => {
                if(response.status === 200){
                    setProducts(response.data)
                }
            })
        }
        if(!products && sorted){
            setProducts(sorted)
            setSorted(undefined)
        }
    }, [products, sorted])

    const handleSortByName = () => {
        var sorted = products
        sorted.sort((a,b) => {
            if(a.pName.toLowerCase() < b.pName.toLowerCase())
                return -1
            if(a.pName.toLowerCase() > b.pName.toLowerCase())    
                return 1
            return 0
        })
        setProducts(undefined)
        setSorted(sorted)
    }

    const handleSortByPrice = () => {
        var sorted = products
        sorted.sort((a,b) => a.price - b.price)
        setProducts(undefined)
        setSorted(sorted)
    }

    const handleSortByType = () => {
        var sorted = products
        sorted.sort((a,b) => {
            if(a.type.toLowerCase() < b.type.toLowerCase())
                return -1
            if(a.type.toLowerCase() > b.type.toLowerCase())    
                return 1
            return 0
        })
        setProducts(undefined)
        setSorted(sorted)
    }

    return (
        

        <Paper className={classes.root}>
            {
                products &&
                <React.Fragment>
                    <div>
                                              
                        <h3>Sort by:</h3>
                        <Button variant="contained" className={classes.button}
                            onClick={handleSortByName}
                        >
                            Name
                        </Button>
                        <Button variant="contained" className={classes.button}
                            onClick={handleSortByPrice}
                        >
                            Price
                        </Button>
                        <Button variant="contained" className={classes.button}
                            onClick={handleSortByType}
                        >
                            Type
                        </Button>                       
                        
                        <Button variant="contained" className={classes.buttonnew}
                            onClick={() => window.location.href=`/add` }>
                            Add new item
                        </Button> 
                    
                    </div>
                    
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>  
                            <StyledTableCell align="center"></StyledTableCell>           
                        </TableRow>
                        </TableHead>
                        <TableBody>                
                            {getList()}               
                        </TableBody>
                    </Table>
                </React.Fragment>
                
            }
        </Paper>
    )
}


