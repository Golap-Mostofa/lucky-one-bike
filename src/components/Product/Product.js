import React from 'react';
import './Product.css'
import { FaShoppingCart } from 'react-icons/fa';
const Product = ({data,hendelAddToCart}) => {
    const {Name, img,price,ratings} = data

    return (
        <div className='product-container'>
           <img src={img} alt="" />
           <div>
           <div>
               <h4>Name: {Name}</h4>
           </div>
           <p>Price: {price}</p>
           <p><small>rating: {ratings}</small></p>
           </div>
          <button className='btn-cart' 
          onClick={()=>hendelAddToCart(data)}>
              <p>add To Cart</p> 
              <FaShoppingCart /></button>
        </div>
    );
};

export default Product