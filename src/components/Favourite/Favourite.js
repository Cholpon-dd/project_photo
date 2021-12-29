import React, { useContext,useEffect, useState} from 'react'
import { productsContext } from '../../contexts/ProductsContext'
import DeleteIcon from '@material-ui/icons/Delete';
import "../Favourite/Favourite.css"
import {calcTotalPrice} from '../../helpers/calcPrice'
import IconButton from "@material-ui/core/IconButton";

const Favourite = () => {
    const {getFavourite,
        favourite,
        changeFavouriteCount,
        checkProductInFavourite,
        deleteFavourite} =useContext(productsContext)
    const [totalPrice, setTotalPrice] = useState();
       
    useEffect(()=>{
        getFavourite()
    },[])
   
    useEffect(() => {
        if (favourite?.products && favourite?.products.length > 0) {
            setTotalPrice(calcTotalPrice(favourite.products));
        }
    }, [favourite]);

    return (
        <div className="cart" >  
            {favourite.products ? (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favourite.products.map(elem=>(
                        <tr key={elem.item.id}>
                            <td><img style={{width:"200px", height:"200px"}} src={elem.item.image} alt="product-img"/></td>
                            <td>{elem.item.title}</td>
                            <td>{elem.item.price}</td>
                          
                            <IconButton style={{color:"#0d5168", marginTop:"90px"}}
                            onClick={()=>deleteFavourite(elem.item.id)}><DeleteIcon/></IconButton> 
                        </tr>
                       
                        ))}
                    </tbody>
                </table>
              
                </div>
            ) : (
                <h1 className="cart-noprod" style={{ textAlign: "center" }}>
                    Нету избранных
                </h1>
            )}         
        </div>
    );
};
export default Favourite;
