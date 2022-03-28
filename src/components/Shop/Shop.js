import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Shop.css'

const Shop = () => {
    const [phones,setPhones] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data));
    },[])

    const handleAddToCart =(selectedPhone)=>{
       let newCart = [];
       const exits = cart.find(phone => phone.id === selectedPhone.id);
       if(!exits && cart.length <= 3){
           newCart = [...cart,selectedPhone];
       }
       else{
           newCart = [...cart];
           alert('You have selected more than 4 phone Or already selected the phone');
       }
       
       setCart(newCart);

    }
    const removeName = () =>{
        const emptyCart = cart.splice(4);
        setCart(emptyCart);
     
  }
    return (
        <div className='shop'>
            <div className="product-container">
              {
                  phones.map(phone => <Phone
                     key={phone.id}
                     phone={phone}
                     handleAddToCart={handleAddToCart}
                     ></Phone>)
              }
            </div>
            <div className="cart-container">
                <Cart cart={cart} removeName={removeName}></Cart>
            </div>
        </div>
    );
};

export default Shop;