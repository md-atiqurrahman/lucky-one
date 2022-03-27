import React, { useEffect, useState } from 'react';
import Phone from '../Phone/Phone';
import './Shop.css'

const Shop = () => {
    const [phones,setPhones] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPhones(data));
    },[])
    return (
        <div className='shop'>
            <div className="product-container">
              {
                  phones.map(phone => <Phone
                     key={phone.id}
                     phone={phone}
                     ></Phone>)
              }
            </div>
            <div className="cart-container">
                  <h2 className='cart-title'>Selected Phones</h2>
                  <div className='cart-btn'>
                  <button className='btn1'><p>CHOOSE 1 FOR ME</p></button>
                  <br/>
                  <button className='btn2'><p>CHOOSE AGAIN</p></button>
                  </div>
            </div>
        </div>
    );
};

export default Shop;