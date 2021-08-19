import FoodImage from "./food.png"
export default function BodyContent(){
    return(
        <div>
            <section className="bodycontent">
                <div className="bodytext">
                    <p>EASY WAY TO ORDER YOUR FOOD</p>
                    <h1>Order Tasty & Fresh Food <span>anytime!</span></h1>
                    <p>Just confirm your order and enjoy our delicious food.</p>
                    <div className="bodybtns">
                        <button>Order Now</button>
                        <a href="#">See Menu</a>
                    </div>
                </div>
               
                    <img src={FoodImage} alt="" className="foodimage" />
               
            </section>
        </div>
    );
}