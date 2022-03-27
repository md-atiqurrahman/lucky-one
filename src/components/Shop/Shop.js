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
                  <h2>this is cart container</h2>
            </div>
        </div>
    );
};

export default Shop;