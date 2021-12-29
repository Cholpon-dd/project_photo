import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/ProductsContext';
import Comments from '../Comments/Comments'
import './Detail.css'
const Detail = () => {
    const {  getProductDetails, productDetails } = useContext(productsContext)
    const id = useParams()

    useEffect(() => {
        getProductDetails(id.id)
        console.log(productDetails)
    }, [])
    return (
        <div>
            {
                productDetails ? (
                    <>
                    <div className="desc">
                    <h1>{productDetails.title}</h1>
                        <img className="desc-photo" src={productDetails.image} alt="" />
                        <h2>{productDetails.category}</h2>
                        <h2>{productDetails.price} сом</h2>
                       <h3>{productDetails.description}</h3>
                     
                     </div>
                    </>
                ) : <h1>...Loading</h1>
            }
              <Comments/>
              
        </div>
    );
};

export default Detail;