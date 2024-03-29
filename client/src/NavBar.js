import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchResult from './SearchResult';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        marginBottom: theme.spacing(1),    
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,    
      },
      input: {
        display: 'none',    
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchButton: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        
        color: 'white',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

export default function NavBar(props) {
    const classes = useStyles();

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleSearch = () => {
    window.location.href = "/search"
    };

    const handleClose = () => {
        setAnchorEl(null);
        window.location.href = "/"
    };

   
    return (
        <div className={classes.root}>
            <AppBar style={{ background: 'black' }} position="static">
                <Toolbar>
                    
                    <Typography className={classes.title} variant="h6" noWrap>
                        ManageX
          </Typography>
          
                    <div className={classes.search}>

                    <IconButton aria-label="searchButton" onClick={handleSearch}>
                        <div className={classes.searchButton}>
                            <SearchIcon />
                        </div>
                        </IconButton> 

                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div>                             
                            <Button variant="contained" className={classes.button} onClick={handleClose}>
                                LOG OUT
                            </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <div>{props.children}</div>
        </div>
    );
}