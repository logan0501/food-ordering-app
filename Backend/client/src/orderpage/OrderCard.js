export default function OrderCard(){
    const fooditems =[
    {
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
  {
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
 {
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
  {
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
    {
        imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
        name:"Briyani",
        description:"Tasty food",
        price:"100",
        quantity:"1",
     } , {
        imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
        name:"Briyani",
        description:"Tasty food",
        price:"100",
        quantity:"1",
     }];
    return(
        
        <div className="fooditems">
            {fooditems.map((e,index)=>
                
            <div className="ordercard">
                <img src={e.imgurl}/>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <p>Rs {e.price} per Kg</p>
            </div>
            )}
        </div>
       
        
    );
}