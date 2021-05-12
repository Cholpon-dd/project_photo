import React, {useContext, useState} from 'react';

import {productsContext} from '../../contexts/ProductsContext' 
import './AddProduct.css';


const AddProduct = ({history})=>{
 const {postProduct} = useContext(productsContext)
const [product, setProduct]=useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: ""
})  
const handleValues =(e)=> {
    let newProduct={
        ...product,
        [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
};
const handleClick=()=>{
    postProduct(product,history);
    setProduct({
        title: "",
    price: "",
    category: "",
    description: "",
    image: ""
    });
};
return (
    <div className="adding-container">
    <input
        className="add-input"
        onChange={handleValues}
        value={product.title}
        type="text"
        placeholder="title"
        name="title"
    />
    <input
        className="add-input"
        onChange={handleValues}
        value={product.price}
        type="text"
        placeholder="price"
        name="price"
    />
    <input
        className="add-input"
        onChange={handleValues}
        value={product.category}
        type="text"
        placeholder="category"
        name="category"
    />
    <input
        className="add-input"
        type="text"
        placeholder="description"
        name="description"
        onChange={handleValues}
        value={product.description}
    ></input>
    <input
        className="add-input"
        onChange={handleValues}
        value={product.image}
        type="text"
        placeholder="image"
        name="image"
    />
    <button onClick={handleClick} className="add-button">Add</button>
</div>
)

}

export default AddProduct;