import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart} = props;
   console.log(cart);
   let name = [];
   for(const phone of cart){
    name.push(phone.phone_name);
   }
   console.log(name);
    return (
        <div>
            <h2 className='cart-title'>Selected Phones</h2>
            <div className='phone-name'>
               <p>{name[0]}</p>            
               <p>{name[1]}</p>            
               <p>{name[2]}</p>            
               <p>{name[3]}</p> 
            </div>           
            <div className='cart-btn'>
                 <button className='btn1'>
                     CHOOSE 1 FOR ME
                 </button>
                 <br/>
                 <button className='btn2'>
                     CHOOSE AGAIN
                 </button>
            </div>
        </div>
    );
};

export default Cart;