import FoodImage from "./food.png"
import AvatarImage from "./1.jpg"
import AvatarImage1 from "./2.png"
import AvatarImage2 from "./3.png"
import {Link, useHistory} from "react-router-dom";
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function BodyContent(){
    const history = useHistory();
    return(
      
            <section className="bodycontent">
                <div className="bodytext">
                    <p>EASY WAY TO ORDER YOUR FOOD</p>
                    <h1>Order Tasty & Fresh Food <span>anytime!</span></h1>
                    <p>Just confirm your order and enjoy our delicious food.</p>
                    <div className="bodybtns">
                        <Link to="/orderpage"><button>Order Now</button></Link>
                        
                        <a href="#">See Menu</a>
                    </div>
            
            <div className="avatargp">
                <p>OUR HAPPY CUSTOMERS</p>
                <AvatarGroup max={4} >
                <Avatar alt="Remy Sharp" src={AvatarImage} />
                <Avatar alt="Travis Howard" src={AvatarImage1} />
                <Avatar alt="Cindy Baker" src={AvatarImage2} />
                <Avatar alt="Agnes Walker" src={AvatarImage} />
                <Avatar alt="Trevor Henderson" src={AvatarImage2} />
                </AvatarGroup>
            </div>
  

                </div>
               <img src={FoodImage} alt="" className="foodimage" />
               
            </section>
     
    );
}