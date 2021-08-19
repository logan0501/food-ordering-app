import BodyContent from "./BodyContent";
 import "./landingpage.css"
import Navbar from "./Navbar";

import MobileNavBar from "./MobileNavBar";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";

export default function LandingPage(){
 

    return(
        <div>
            
            <Navbar/>
            <MobileNavBar/>
            <BodyContent/>
        </div>
    );
}