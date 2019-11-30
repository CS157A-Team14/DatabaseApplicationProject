import React, {useState, useEffect} from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,    
      },
      input: {
        display: 'none',
      },
  }));

export default function ItemHistory(props) {
    const classes = useStyles();
    const [histories, setHistories] = useState(undefined)

    
    const getList = () => histories.map((history, id) => (
        <TableRow key={id}>
            <StyledTableCell align="center">{history.pName}</StyledTableCell>
            <StyledTableCell align="center">{history.event}</StyledTableCell>
            <StyledTableCell align="center">{history.date}</StyledTableCell>  
        </TableRow>
    ))

    useEffect(() => {
        if(!histories){
            axios.get(`/product/gethistory/${props.itemId}`).then(response => {
                if(response.status === 200){
                    setHistories(response.data)
                }
            })
        }
    }, [histories])

    return (
        <Paper className={classes.root}>
            {
                histories &&
                <React.Fragment>
                    <div>
                        <Button variant="contained" className={classes.button}
                            onClick={() => window.location.href=`/main` }>
                            Home
                        </Button>
                    </div>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Event</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>                                
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


