import Logo from "./logo-8.png"
export default function Navbar(){
    return(
        <div className="navbar">
            <img src={Logo} className="logo" />
            <nav>
                <li>Home</li>
                <li>Order Food</li>
                <li>About Us</li>
                
            </nav>
            <span>
                <li><button className="signinbtn">Sign in</button></li>
                <li><button className="signupbtn">Sign Up</button></li>
            </span>
        </div>
    );
}