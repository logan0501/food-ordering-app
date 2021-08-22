import { useHistory } from "react-router-dom";
import Logo from "./logo-8.png"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
var items=[];
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:"10px 40px",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      width:"80%",
      padding:'20px',
    },
    order:{
      display:'flex',
      flexDirection:'row',
      alignItems:"center",
      justifyContent:"space-between"
    },
    header:{
      display:"flex",
      justifyContent:"space-between",
    }
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

    function handleClick(){
      console.log(items);
    }
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
            <div className={classes.header}>
            <p id="transition-modal-title">Your Orders</p>
          <button className="shoppingbtn clearbtn" onClick={()=>{sessionStorage.removeItem('items');handleClose();}}>Clear</button>
            </div>
        
          {JSON.parse(sessionStorage.getItem('items')) ? JSON.parse(sessionStorage.getItem('items')).map(e=>{
            items.push(e);
            return (
            <div className={classes.order}>
              <p id="transition-modal-description">{e.name}</p>
              <input type="text" name={e.name} maxLength="2" value={e.quantity} onChange={(event)=>{
          const {name,value}=event.target;
          console.log(e);
              }}/>
            </div>
            )}):<p>No Orders</p>}
            <button onClick={handleClick}>Calculate</button>
            </div>
        </Fade>
      </Modal>
    </div>
        </div>
    );
}