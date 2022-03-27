import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Phone.css';

const Phone = (props) => {
    const{phone,handleAddToCart} = props;
    const {price,image,phone_name} =phone;
    return (
        <div className='card'>
            <img src={image} alt="" />
            <div className='card-info'>
               <h3>Name: {phone_name}</h3>
               <p>Price: ${price}</p>
            </div>
            <button className='card-btn' onClick={ () => handleAddToCart(phone)}>
               <p className='btn-name'>Add to Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Phone;