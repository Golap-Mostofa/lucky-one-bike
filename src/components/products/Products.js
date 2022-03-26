import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [Products,Setproducts]= useState([])
   const [productName,setproductName] = useState([])
//    console.log(Name);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>Setproducts(data))
    },[])

    const hendelAddToCart=(props)=>{
      const newCard = [productName,props]
      setproductName(newCard)
    }

    return (
        <div className='allCard-products'>
            <div className="card-products">
                {
                    Products.map(product=><Product
                    data={product}
                    key={product.id}
                    hendelAddToCart={hendelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="item-products">
                <Card
                card={productName}
                ></Card>
            </div>
        
        </div>
    );
};

export default Products;