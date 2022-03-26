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
      const newCard = [...productName,props]
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
        <div className="container">
            <h2>1.how react works</h2>
            <p>
                <small>
                React is a JavaScript-based UI development library. Facebook and  open-source developer community run it. Although React  a library
                React has something called the virtual DOM, which is used to keep a representation of the real DOM elements in memory.
                Alongside Angular, and more recently Vue
                React is a critical tool that has had a big impact on the way we build web applications.
                It a library. For building user interfaces. This is perfect because, more often than not, this is all we want. The best part about this description is that it highlights React simplicity
                React.js is generally thought of as the view layer in an application.
                </small>
            </p>
            <p>
                <h2>how usestate works in react</h2>
                <small>
                The useState() is a Hook that you to have state variables in functional components.A React component using hooks is defined using the regular JavaScript function syntax, not the ES6 class syntax
                Now that makes a lot of sense, considering that prior to React hooks, a React component defined as a function will have to be refactored to use the ES6 class syntax, in order to add say some piece of state or lifecycle methods to the component.
                </small>
            </p>
        </div>
        </div>
    );
};

export default Products;