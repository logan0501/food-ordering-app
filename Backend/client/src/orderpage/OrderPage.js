import OrderCard from "./OrderCard";
import Navbar from "../landingPage/Navbar";
import MobileNavbar from "../landingPage/MobileNavBar"
import "./orderpage.css"
export default function OrderPage(){
    
    return(
        <div>
            <Navbar/>
            <MobileNavbar/>
            <h1>Vegetarian special</h1>
            <OrderCard/>
            <h1>Non-vegetarian special</h1>
            <OrderCard/>
        </div>
       
    );
}