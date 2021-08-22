import { useHistory } from "react-router-dom";
import Logo from "./logo-8.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

export default function Navbar(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const history = useHistory();
    return(
        <div className="navbar">
            <img src={Logo} className="logo" />
            <nav>
                <li onClick={()=>{history.replace("/")}}>Home</li>
                <li onClick={()=>{history.push("/orderpage")}}>Order Food</li>
                <li>About Us</li>
                
            </nav>
            <span>
                <li><button className="signinbtn" onClick={()=>{history.push("/signin")}}>Sign in</button></li>
                <li><button className="signupbtn" onClick={()=>{history.push("/signup")}}>Sign Up</button></li>
            </span>
            <button className="shoppingbtn" onClick={handleOpen}><ShoppingCartIcon/></button>

            <div>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{sessionStorage.getItem('items')}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
        </div>
    );
}