import FoodImage from "./food.png"
import {Link, useHistory} from "react-router-dom";
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
                </div>
               <img src={FoodImage} alt="" className="foodimage" />
               
            </section>
     
    );
}