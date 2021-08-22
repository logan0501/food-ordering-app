import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useState } from 'react';

var items=[]
var cost=0
export default function OrderCard(){
   
    const fooditems =[
    {   id:1,
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
  {     id:2,
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani 2",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
 {id:3,
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani 3",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
  {
      id:4,
       imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
       name:"Briyani 4",
       description:"Tasty food",
       price:"100",
       quantity:"1",
    },
    {id:5,
        imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
        name:"Briyani 5",
        description:"Tasty food",
        price:"100",
        quantity:"1",
     } , {
         id:6,
        imgurl: "https://static.toiimg.com/thumb/54308405.cms?width=1200&height=900",
        name:"Briyani 6",
        description:"Tasty food",
        price:"100",
        quantity:"1",
     }];
     function additem(e){
         if(!sessionStorage.getItem('items')){
            items=[]; 
            items.push(e);
            sessionStorage.setItem('items',JSON.stringify(items));
         }
        if(!items.includes(e)){
            items.push(e);

        sessionStorage.setItem('items',JSON.stringify(items));
        
        }
        
     }
    return(
        
        <div className="fooditems">
            {fooditems.map((e,index)=>
                
            <div className="ordercard">
                <img src={e.imgurl}/>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <p>Rs {e.price} per Kg</p>
                    <button className="shoppingbtn" onClick={()=>{additem(e)}}><ShoppingCartIcon/></button>
                </div>
            
            </div>
            )}
        </div>
    );
}