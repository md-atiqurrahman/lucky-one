import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart,removeName} = props;

   let name = [];
   for(const phone of cart){
    name.push(phone.phone_name);
   }
   const getRandomNumber = () =>{
       const spanTag =  document.getElementById('choose-one');

       const getInnerHtml =(number) =>{
          let randomNumber = Math.floor(Math.random()* number);
          const phoneName = name[randomNumber];   
          spanTag.innerHTML = phoneName;
       }
       if(spanTag.innerHTML === ''){
            getInnerHtml(4);
       }
       else if(spanTag.innerHTML === 'undefined'){
           spanTag.innerHTML = '';
           alert('You have to select minimum 4 phone first');
       }
       else{
           alert('Already choose a phone for you.Need another one??');
           spanTag.innerHTML = '';
       }
   }
    return (
        <div>
            <h2 className='cart-title'>Selected Phones</h2>
            <div className='phone-name'>
               <p className='selected-phone'>{name[1]}</p>            
               <p className='selected-phone'>{name[2]}</p>            
               <p className='selected-phone'>{name[0]}</p>            
               <p className='selected-phone'>{name[3]}</p> 
            </div>
            <p className='choose-title'>
                Choose One:
               <span className='choose-one' id='choose-one'></span>
            </p>           
            <div className='cart-btn'>
                 <button className='btn1' onClick={getRandomNumber}>
                     CHOOSE 1 FOR ME
                 </button>
                 <br/>
                 <button className='btn2' onClick={removeName}>
                     CHOOSE AGAIN
                 </button>
            </div>
        </div>
    );
};

export default Cart;